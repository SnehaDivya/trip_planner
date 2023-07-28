import "@/styles/globals.css";
import { Destination } from "@/Providers/Dprovider";
import FrontPage from "../components/FrontPage";
import { Customer } from "@/Providers/Cprovider";
import { Review } from "@/Providers/Rprovider";
export default function App({ Component, pageProps }) {
  return (
    <Review>
      <Destination>
        <Customer>
          <Component {...pageProps} />
        </Customer>
      </Destination>
    </Review>
  );
}
