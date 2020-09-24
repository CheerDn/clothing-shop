import React, { Component } from "react"
import CollectionOverview from "../../components/collection-overview/collection-overview.component"

function ShopPage({ collections }) {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  )
}

export default ShopPage
