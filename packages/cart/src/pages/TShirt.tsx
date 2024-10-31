

function TShirt(): JSX.Element {
  return (
    <>
      <html>
            <head>
                <title>T-Shirt Store</title>
            </head>
            <body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">
                <h1 style="color: #333; text-align: center;">Welcome to the T-Shirt Store!</h1>
                <p style="text-align: center; color: #777;">Find your favorite T-shirts below:</p>

                <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
                    <div style="width: 200px; padding: 20px; background-color: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.2); border-radius: 8px; text-align: center;">
                        <img src="https://via.placeholder.com/150?text=T-Shirt+1" alt="Cool T-Shirt" style="width: 100%; border-radius: 8px;">
                        <h3 style="color: #333; margin: 15px 0 5px;">Cool T-Shirt</h3>
                        <p style="color: #555;">$20.00</p>
                    </div>

                    <div style="width: 200px; padding: 20px; background-color: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.2); border-radius: 8px; text-align: center;">
                        <img src="https://via.placeholder.com/150?text=T-Shirt+2" alt="Vintage T-Shirt" style="width: 100%; border-radius: 8px;">
                        <h3 style="color: #333; margin: 15px 0 5px;">Vintage T-Shirt</h3>
                        <p style="color: #555;">$25.00</p>
                    </div>

                    <div style="width: 200px; padding: 20px; background-color: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.2); border-radius: 8px; text-align: center;">
                        <img src="https://via.placeholder.com/150?text=T-Shirt+3" alt="Graphic T-Shirt" style="width: 100%; border-radius: 8px;">
                        <h3 style="color: #333; margin: 15px 0 5px;">Graphic T-Shirt</h3>
                        <p style="color: #555;">$22.00</p>
                    </div>

                    <div style="width: 200px; padding: 20px; background-color: #fff; box-shadow: 0 4px 8px rgba(0,0,0,0.2); border-radius: 8px; text-align: center;">
                        <img src="https://via.placeholder.com/150?text=T-Shirt+4" alt="Minimal T-Shirt" style="width: 100%; border-radius: 8px;">
                        <h3 style="color: #333; margin: 15px 0 5px;">Minimal T-Shirt</h3>
                        <p style="color: #555;">$18.00</p>
                    </div>
                </div>
            </body>
        </html>
      
    </>
  )
}

export default ErrorPage
