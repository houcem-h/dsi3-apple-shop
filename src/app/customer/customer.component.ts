import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customer: any;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const customerId = params.get("id") || "";
      this.authService.getUserProfile(customerId).subscribe(customer => this.customer = customer);
    });
  }

}
