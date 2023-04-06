import "./cart.css";

function ShoppingCart(){

  return (
    <div class="container py-5">
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-4 shadow-sm">
          <img src="/images/product1.jpg" alt="Product 1" class="card-img-top"></img>
          <div class="card-body">
            <h3 class="card-title">Product 1</h3>
            <p class="card-text">$10.99</p>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary minus" type="button">-</button>
              </div>
              <input type="number" class="form-control" min="1" value="1"></input>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary plus" type="button">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-4 shadow-sm">
          <img src="/images/product2.jpg" alt="Product 2" class="card-img-top"></img>
          <div class="card-body">
            <h3 class="card-title">Product 2</h3>
            <p class="card-text">$15.99</p>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary minus" type="button">-</button>
              </div>
              <input type="number" class="form-control" min="1" value="1"></input>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary plus" type="button">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card mb-4 shadow-sm">
          <div class="card-body">
            <p class="card-text text-right"><strong>Total: $26.98</strong></p>
            <button class="btn btn-primary btn-lg btn-block">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ShoppingCart;