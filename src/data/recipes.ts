export interface Recipe {
  slug: string;
  name: string;
  description: string;
  cuisine: string;
  type: string;
  date: string;
  ingredients: string[];
  instructions: string;
  images: string[];
}

export const recipes: Recipe[] = [
  {
    slug: "courgette-fritters",
    name: "courgette fritters",
    description: "crispy green fritters that pack 50 grams of protein per serving. a evening snack, or a daily driver for hard days. it comes together in like 15 minutes! courgette can be replaced with other greens too.",
    cuisine: "protein hack",
    type: "main, snack",
    date: "2/10/2025",
    ingredients: [
      "1-2 eggs",
      "1 scoop soy protein isolate powder (i like bulk powders)",
      "1/2 courgette grated",
      "salt, pepper, herbs (i like dill)",
      "a bit of grated cheddar cheese or perhaps some spinach",
      "vegetable/avocado oil",
      "greek yoghurt",
      "mint",
      "your chilli sauce of choice (i like maggi hot & sweet)"
    ],
    instructions: "Grate half a courgette. Soak in a bowl with a bit of salt for 5-10 minutes. Squeeze out the excess water. Mix in the two eggs, then mix in the soy protein powder. Add all seasonings and/or cheese/herbs/spinach. <br> Heat a non stick pan with a few tablespoons of oil. Form flat fritter-shaped patties of the dough on the pan (by spooning the dough onto the pan and pressing). Cook until golden brown. <br> Mix chopped mint into the greek yoghurt, with a sprinkle of flaky salt. Serve the fritters with the yoghurt sauce and chilli sauce on the side.",
    images: []
  },
  {
    slug: "leek-soup",
    name: "miso butter leek soup",
    description: "buttery grilled leeks, blended into a creamy soup with silken tofu for 20 grams of protein",
    cuisine: "protein hack",
    type: "soup",
    date: "2/10/2025",
    ingredients: [
      "silken tofu",
      "leeks",
      "butter",
      "miso"
    ],
    instructions: "Slice and grill the leeks in butter until brown, add in a little miso. Blend all the ingredients together... so easy!",
    images: []
  }, 
  {
    slug: "rasmalai-protein",
    name: "rasmalai protein shake",
    description: "a protein shake that tastes like the sweet milk in rasmalai.",
    cuisine: "protein hack",
    type: "drink",
    date: "2/10/2025",
    ingredients: [
      "your favourite vanilla protein shake (I mix Bulk powder's plain whey isolate + Premier Protein's vanilla)",
      "milk/water to mix",
      "cardamom powder",
      "ground pistachios / cashews"
    ],
    instructions: "Literally just shake everything up together.",
    images: []
  },
  {
    slug: "shorba",
    name: "tomato shorba",
    description: "warming spicy fresh tomato soup, brought to India by the Mughals from Persia.",
    cuisine: "north indian / mughlai",
    type: "starter",
    date: "2/10/2025",
    ingredients: [
      "ripe sweet tomatoes",
      "garam masala, kashmiri red chilli powder, amchoor, cumin, black pepper, salt",
      "garlic, ginger",
      "fresh coriander",
      "salted butter"
    ],
    instructions: "In a large heavy pot, fry the garlic and ginger in a bit of oil quickly. Then add in the tomatoes, quartered, and cook until they're jammy and falling apart. Add all the spices and cook for a few more minutes. Then blend everything together. Serve by topping with chopped coriander and a small chunk of salted  butter.",
    images: []
  },
  {
    slug: "tataki",
    name: "fresh tuna tataki",
    description: "lightly seared fish in a citrus sauce. this recipe is adapted from the dish at my favourite restaurant, Takagiya. can use salmon and probably other fish too.",
    cuisine: "japanese",
    type: "small plate",
    date: "2/10/2025",
    ingredients: [
      "yellowfin tuna (sashimi grade)",
      "ponzu sauce",
      "ginger, grated with the juice",
      "mirin",
      "toasted white sesame seeds",
      "soy sauce",
      "grated radish, sprouts, and/or spring onions sliced thinly to garnish",
    ],
    instructions: "Mix the sauce ingredients together. Ponzu forms most of the sauce, then add soy sauce, mirin, and ginger to taste. Sear the tuna on all sides for just 30 seconds to 1 minute. Slice into thin pieces with a sharp knife. Pour the sauce over, plate with all the garnishes.",
    images: []
  },
  {
    slug: "chapli",
    name: "green chilli chapli kebabs",
    description: "a traditional street food, fragrant minced meat kebabs. 'chaprikh' means flat: these kebabs are pressed flat. usually beef or mutton. i like to use chicken mince, but any minced protein will do!",
    cuisine: "pashtun",
    type: "street food",
    date: "2/10/2025",
    ingredients: [
      "minced chicken (or other protein)",
      "green chilli",
      "garlic",
      "ginger",
      "coriander powder",
      "fresh coriander",
      "kalonji (onion seeds)",
      "red onions"
    ],
    instructions: "Finely chop the green chilli, garlic, ginger, coriander. Mix all the ingredients, except the onions, in a bowl. In a hot flat pan with oil, make 'chapli' shaped kebabs by scooping the mince onto the pan and spreading it out flat. Cook on both sides until browned / 74°C. Serve with sliced raw onion on the side.",
    images: []
  },
  {
    slug: "egg",
    name: "garlic chilli yoghurt eggs",
    description: "inspired by the Turkish çilbir but with my own twists. decidded to put this on here after faye really enjoyed it.",
    cuisine: "turkish?",
    type: "brunch",
    date: "2/11/2025",
    ingredients: [
      "2 eggs",
      "fage 5% greek yoghurt",
      "garlic, minced",
      "spring onion, thinly sliced",
      "chilli flakes, I like to use gochugaru",
      "chilli jam, my favourite brand is Tracklements",
      "oil for frying eggs and to make a chilli oil"
    ],
    instructions: "Spread a thick layer of Greek yoghurt on a plate. Fry up two eggs, sunny side up, quickly (poached is also nice here). Place the eggs on the yoghurt. In the same pan, in 2-3 tbsp of oil, fry the garlic, spring onion whites, and chilli flakes until fragrant. Pour over the eggs. Top with spring onion greens and a few dollops of chilli jam and serve immediately.",
    images: []
  }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(recipe => recipe.slug === slug);
}
