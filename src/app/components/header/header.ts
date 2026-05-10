import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";



@Component({
    templateUrl:"./header.html",
    selector:"app-header",
    styleUrl:"./header.css",
    imports: [RouterLink, RouterLinkActive]
})
export class Header{

    router = inject(Router)

    logOut(){
        localStorage.removeItem("user")
        this.router.navigate(["/login"])
    }
}