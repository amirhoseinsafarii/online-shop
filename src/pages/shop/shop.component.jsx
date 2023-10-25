import { Route } from "react-router-dom";
// import SHOP_DATA from "./shop.data.js";
import CollectionsOverview from "../../components/collections-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);
export default ShopPage;
