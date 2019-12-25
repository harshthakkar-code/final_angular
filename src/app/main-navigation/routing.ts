import {Routes, RouterModule} from "@angular/router";
import { UserComponent } from '../user/user.component';

const arr:Routes=[
  {path: '',component:UserComponent},
 // {path:'addCustomer',component:AddCustomerComponent},
  //{path:'editCustomer/:email',component:EditCustomerComponent}

];
export const arr_routing =RouterModule.forRoot(arr);
