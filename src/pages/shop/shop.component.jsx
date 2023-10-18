import { Component } from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";
import SHOP_DATA from "./shop.data.js";
class shopPage extends Component {
  state = { collections: SHOP_DATA };

  render() {
    const collections = this.state.collections;
    return (
      <>
        <div className="shop-page">
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      </>
    );
  }
}

export default shopPage;
