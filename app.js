
        let app = Vue.createApp({

            data(){
                return{
                showMe : true,

                    commands : {
                    car : 0,
                    moto : 10,
                    bicycle : 0,
                },
                price :{
                    car : 250,
                    moto :200,
                    bicycle : 150,
                }

                }
            },
            methods : {
                
                addThere(type){
                    this.price[type] += this.commands[type]
                },
                showIt(e){
                    e.preventDefault()
                    this.showMe = !this.showMe
                }
            }
        })
           app.component('cart', {
            props: ['commands', 'price'],
             template : `
             
             <div id="cart">
    <div id="head">
        <h1 id="title">Cart</h1>
        <h1 class="fa fa-facebook"  id="closeCart">X</h1>
    </div>
    <div id="bodyCart">
        <table>
            <tr id="titles">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>

            </tr>
            <tr>
                <td>Car</td>
                <td>{{price.car}}</td>
                <td>{{commands.car}}</td>
                <td>{{(commands.car * price.car).toFixed(2)}}</td>
                <td class="closeArt">X</td>

            </tr>
            <tr>
                <td>Moto</td>
                <td>{{price.moto}}</td>
                <td>{{commands.moto}}</td>
                <td>{{(commands.moto * price.moto).toFixed(2)}}</td>
                <td class="closeArt">X</td>

            </tr>
            <tr>
                <td>Bicycle</td>
                <td>{{price.bicycle}}</td>
                <td>{{commands.bicycle}}</td>
                <td>{{(commands.bicycle * price.bicycle).toFixed(2)}}</td>
                <td class="closeArt">X</td>

            </tr>
        </table>
        <h4>No items in cart</h4>
        <div id="total">
            <span>{{(commands.car * price.car + commands.moto * price.moto + commands.bicycle * price.bicycle).toFixed(2) + '$'}} </span>
            <button id="check">Check out</button>

        </div>

    </div>
</div>

             `,
            
           })
        app.mount('#app')

    
