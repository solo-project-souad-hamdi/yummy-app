
//First of all, let's target the element below:
const getMeal = document.getElementById('get_meal');
const mealszone = document.getElementById('meal');
//Every time we click the button we create a new meal from the API
//When a user clicks the button, a content is displayed. Another button click hides the content
//The fetch() method in JavaScript is used to request to the server and load the information in the webpages. The request can be of any APIs that returns the data of the format JSON.. This method returns a promise.
//The fetch() requires only one parameter which is the URL of the resource that you want to fetch
//JSON stands for JavaScript Object Notation,JSON is a text format for storing and transporting data
    //HOW THE FETCH WROKS
//The fetch():  method returns a Promise. After the fetch() method, include the  method then()
 //If the Promise returned is resolve, the function within the then() method is executed. That function contains the code for handling the data received from the API.
//After the then() method, include the catch() method:
//  promise :   is a value,it allows you to associate handlers with sucess value or failure value,instead of returning the final value it returns a promise.
//After the then() method,we have the catch() method that handle the error
// THE SYNTAX ()=> is an arrow function, it's a short syntax and it used instead of 
//The TypeError object represents an error when an operation could not be performed,
// .map =>

getMeal.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
    //the response will stored in the invoked function that take an argument res.meals[0] because the information that we need to have is stored in an array of only none object
		createMeal(res.meals[0]);
	})
});

function createMeal(meal) {
//put all the ingredients in one array to use it after
const ingredients = [];
	// Get all ingredients from the object:we have 20 ingredients in the API so we need to break the for loop if we don't have a ingredients more
	for (let i = 1; i <= 20; i++) {
		if (meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
			);
		} else {
			break;
		}
	}
    //in meal_container we will put every thing also .innerHTML property is used for modifying the HTML content from JavaScript code. InnerHTML property is also used for writing dynamic html content on html documents.
    //meal.strMealThumb contain the link to the image can be used as a source here to access to the image
    //meal.strCategory contain the category of the food(seafood,vegan,pasta...)
    //meal.strArea contain the country famous by this dish
    //meal.strTags contain some tags
    //meal.strMeal contain the name of the meal
    //meal.strInstructions contain the instructions to follow for preparing the dishes
    //map() method is used to create a new array with the results of apply the function for every array element. 
    //.join('') to change the array into a string
    //we use the list to regroup all the ingredients in unordered list

    mealszone.innerHTML = `
       <div class="mealblock">
       <h2>🥙${meal.strMeal}🥙</h2>
          <div class="informations_meal"> <br>
               <img id="image_food" src="${meal.strMealThumb}" alt="Meal Img"/>
                <p id="Category"><strong>Category:</strong> ${meal.strCategory}</p> 
		        <p id="area"><strong>Area:</strong> ${meal.strArea} </p>
		        <p id="tag"><strong>Tags:</strong> ${meal.strTags}</p>
          </div>
          <div id="instr">
          <h2>How to cook this meal?🥣</h2>

               <p id="instructions">${meal.strInstructions}</p> 
          </div>
			</div>
        <div>
        <div>
        <h2>Ingredients🧈🧂🍳:</h2>
				<ul >
                        ${ingredients.map(ingredient => 
                        `<li id= "ing">${ingredient}</li>`).join('')}
				</ul>
			</div>
        </div>
          
    
      </div> 
`;
}

