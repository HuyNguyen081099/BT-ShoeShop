import React from 'react'

const ProductItem = (props) => {
    const { product, handleProductDetail, handleCarts } = props
    return (
        <div className="col-4 mt-5" style={{  }}>
            <div className="card border border-4" style={{ borderRadius: 20, borderStyle: 'solid', color: '#000497',}}>
                <img src={product.image} alt="..." />
                <div className="card-body" style={{ backgroundColor: '#0004 ', borderRadius: 15, fontSize: 18}}>
                    <p className="fw-bold">{product.name}</p>
                    <p className="mt-3">{product.price}$</p>
                    <div className="mt-3 d-flex justify-content-between">
                        <button className="btn btn-success" style={{ backgroundColor: '#000497' }}
                            onClick={() => { handleCarts(product) }} >
                            Add To Cart
                        </button>
                        <button className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            onClick={() => { handleProductDetail(product) }} >
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
