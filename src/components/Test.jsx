<Item
style={{
  paddingTop: "1rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  // background: "linear-gradient(to bottom, black ,#153349  ,black )",
  background: "pink",
}}
xs={12}
sm={8}
md={8}
lg={8}
xl={8}
>
{!products
  ? null
  : currentProducts.map((product) => (
      <Item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={3}
        key={product.id}
        style={{
          height: "100%",
          width: "100%",
          // background: "linear-gradient(to bottom, #133044,#0E2332)",
          borderRadius: "0.5rem",
          // margin: "0.5rem",
          background: "white",
        }}
      >
        <ProductCard
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          quantity={product.quantity}
          style={{
            borderRadius: "0.5rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            boxShadow: "0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2)",
          }}
        />
      </Item>
    ))}

<Item
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    background: "white",
  }}
>
  <Paginations
    itemsPerPage={itemsPerPage}
    totalItems={products.length}
    handleClick={handleClick}
  />
</Item>
</Item>