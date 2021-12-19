import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customer: any;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const customerId = params.get("id") || "";
      this.authService.getUserProfile(customerId).subscribe(customer => {
        this.customer = customer,
        this.localStorageService.set('user', {email: customer.email, id: customer._id, name: customer.name});
      });
    });
  }

}
