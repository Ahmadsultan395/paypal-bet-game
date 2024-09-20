import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import PersonelInfo from "./Views/Landing/PersonelInfo";
import PaymentMethod from "./Views/Landing/paymentMethod";
import Success from "./Views/Landing/success";
import PaymentCancel from "./Views/Landing/PaymentCancel";







export default function Router() {
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },
       {
        path:'/info/:id',
        element : <PersonelInfo /> ,
       },
       {
        path:'/payment-method',
        element : <PaymentMethod /> ,
       },
       {
        path:'/success',
        element : <Success/> ,
       },
       {
        path:'/cancel',
        element : <PaymentCancel/> ,
       },

    ])
    return element
}