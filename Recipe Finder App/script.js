document.addEventListener("DOMContentLoaded", () => {
    // Updated Recipe Data with Indian Vegetarian Dishes
    const recipes = [
      {
        name: "Pancakes",
        ingredients: ["flour", "milk", "egg"],
        type: "Breakfast"
      },
      {
        name: "Caesar Salad",
        ingredients: ["lettuce", "chicken", "croutons"],
        type: "Lunch"
      },
      {
        name: "Omelette",
        ingredients: ["egg", "cheese", "milk"],
        type: "Breakfast"
      },
      {
        name: "Grilled Cheese Sandwich",
        ingredients: ["bread", "cheese", "butter"],
        type: "Lunch"
      },
      {
        name: "Vegetable Biryani",
        ingredients: ["rice", "carrot", "peas", "spices"],
        type: "Dinner"
      },
      {
        name: "Masala Dosa",
        ingredients: ["rice", "lentils", "potato", "spices"],
        type: "Breakfast"
      },
      {
        name: "Chole Bhature",
        ingredients: ["chickpeas", "flour", "spices"],
        type: "Lunch"
      },
      {
        name: "Paneer Butter Masala",
        ingredients: ["paneer", "tomato", "cream", "spices"],
        type: "Dinner"
      },
      {
        name: "Aloo Paratha",
        ingredients: ["flour", "potato", "butter", "spices"],
        type: "Breakfast"
      },
      {
        name: "Rajma Chawal",
        ingredients: ["kidney beans", "rice", "tomato", "spices"],
        type: "Lunch"
      },
      {
        name: "Palak Paneer",
        ingredients: ["spinach", "paneer", "spices", "cream"],
        type: "Dinner"
      }
    ];
  
    // Event Listener for Search Button
    document.getElementById("searchButton").addEventListener("click", function () {
      const recipeNameInput = document.getElementById("recipeNameInput").value.toLowerCase();
      const selectedType = document.getElementById("recipeType").value;
      searchRecipesByName(recipeNameInput, selectedType);
    });
  
    // Search by Recipe Name Function
    function searchRecipesByName(recipeNameInput, selectedType) {
      const filteredRecipes = recipes.filter(recipe => {
        const matchesName = recipe.name.toLowerCase().includes(recipeNameInput);
        const matchesType = selectedType ? recipe.type === selectedType : true;
        return matchesName && matchesType;
      });
  
      displayRecipes(filteredRecipes);
    }
  
    // Display Results Function
    function displayRecipes(recipes) {
      const resultsContainer = document.getElementById("recipeResults");
      resultsContainer.innerHTML = ""; // Clear previous results
  
      if (recipes.length === 0) {
        resultsContainer.innerHTML = "<p>No recipes found.</p>";
        return;
      }
  
      recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        recipeCard.innerHTML = `
          <h2>${recipe.name}</h2>
          <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
          <p>Type: ${recipe.type}</p>
        `;
        resultsContainer.appendChild(recipeCard);
      });
    }
  });
  