import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Grid, IconButton, Card , CardContent ,Collapse, Typography } from '@mui/material';
import DayCard from './components/DayCard';
import MealDetail from './components/MealDetail';

// Sample meal plan data
const mealPlan = [
      {
        "day 1": [
          {
            "meal_name": "breakfast",
            "meal_time": "9:00",
            "Beverage": {
              "recipe_name": "Spicy Margarita",
              "food_role": [
                "Beverage",
                "Mexican"
              ],
              "ingredients": [
                {
                  "name": "Tequila",
                  "quantity": {
                    "measure": "2 oz",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Lime Juice",
                  "quantity": {
                    "measure": "1 oz",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Triple Sec",
                  "quantity": {
                    "measure": "1/2 oz",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Hot Sauce",
                  "quantity": {
                    "measure": "2 dashes",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                }
              ],
              "hasDairy": false,
              "hasMeat": false,
              "hasNuts": false,
              "prep_time": "10 minutes",
              "cook_time": "15 minutes",
              "total_time": "25 minutes",
              "serves": "4",
              "instructions": [
                {
                  "original_text": "1. Combine all ingredients in a shaker with ice.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "1.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "2. Shake well and strain into a glass.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "2.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                }
              ]
            },
            "Main Course": {
              "recipe_name": "Saltimbocca",
              "food_role": [
                "Main Course",
                "Italian"
              ],
              "ingredients": [
                {
                  "name": "Veal Cutlets",
                  "quantity": {
                    "measure": "4",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Prosciutto",
                  "quantity": {
                    "measure": "4 slices",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Sage Leaves",
                  "quantity": {
                    "measure": "4",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Flour",
                  "quantity": {
                    "measure": "1/2 cup",
                    "unit": ""
                  },
                  "allergies": "Gluten",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Butter",
                  "quantity": {
                    "measure": "2 tbsp",
                    "unit": ""
                  },
                  "allergies": "Dairy",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Olive Oil",
                  "quantity": {
                    "measure": "2 tbsp",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "White Wine",
                  "quantity": {
                    "measure": "1/2 cup",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Salt",
                  "quantity": {
                    "measure": "to taste",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Black Pepper",
                  "quantity": {
                    "measure": "to taste",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                }
              ],
              "hasDairy": true,
              "hasMeat": false,
              "hasNuts": false,
              "prep_time": "10 minutes",
              "cook_time": "15 minutes",
              "total_time": "25 minutes",
              "serves": "4",
              "instructions": [
                {
                  "original_text": "1. Place a sage leaf and a slice of prosciutto on each veal cutlet. Secure with toothpicks.",
                  "input_condition": [
                    "whole food"
                  ],
                  "task": [
                    {
                      "action_name": "1.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "knife"
                        ],
                        "failure": [
                          "Inconsistent cuts"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "chopped or sliced food"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "2. Dredge the cutlets in flour, shaking off excess.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "2.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "3. Heat butter and olive oil in a pan. Cook the veal cutlets until golden brown on both sides.",
                  "input_condition": [
                    "cold skillet or oven"
                  ],
                  "task": [
                    {
                      "action_name": "3.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "oven"
                        ],
                        "failure": [
                          "Pan overheated or underheated"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "hot skillet or oven"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "4. Remove the cutlets and deglaze the pan with white wine.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "4.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "5. Return the cutlets to the pan and cook until the sauce thickens slightly. Serve hot.",
                  "input_condition": [
                    "raw food"
                  ],
                  "task": [
                    {
                      "action_name": "5.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "pan"
                        ],
                        "failure": [
                          "Food undercooked or burnt"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "cooked food"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                }
              ]
            }
          },
          {
            "meal_name": "lunch",
            "meal_time": "13:00",
            "Beverage": {
              "recipe_name": "Butterbeer",
              "food_role": [
                "Beverage",
                "British"
              ],
              "ingredients": [
                {
                  "name": "Cream Soda",
                  "quantity": {
                    "measure": "2 cups",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Butterscotch Syrup",
                  "quantity": {
                    "measure": "2 tbsp",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Whipped Cream",
                  "quantity": {
                    "measure": "1/2 cup",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                }
              ],
              "hasDairy": false,
              "hasMeat": false,
              "hasNuts": false,
              "prep_time": "10 minutes",
              "cook_time": "15 minutes",
              "total_time": "25 minutes",
              "serves": "4",
              "instructions": [
                {
                  "original_text": "1. In a glass, combine cream soda with butterscotch syrup.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "1.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "2. Top with whipped cream and serve chilled.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "2.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                }
              ]
            },
            "Main Course": {
              "recipe_name": "Roasted Vegetable Wrap",
              "food_role": [
                "Main Course",
                "American"
              ],
              "ingredients": [
                {
                  "name": "Whole Wheat Tortilla",
                  "quantity": {
                    "measure": "1",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Bell Peppers",
                  "quantity": {
                    "measure": "1",
                    "unit": "sliced"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Zucchini",
                  "quantity": {
                    "measure": "1",
                    "unit": "sliced"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Red Onion",
                  "quantity": {
                    "measure": "1/2",
                    "unit": "sliced"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Olive Oil",
                  "quantity": {
                    "measure": "2 tbsp",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Hummus",
                  "quantity": {
                    "measure": "2 tbsp",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Salt",
                  "quantity": {
                    "measure": "to taste",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Black Pepper",
                  "quantity": {
                    "measure": "to taste",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                }
              ],
              "hasDairy": false,
              "hasMeat": false,
              "hasNuts": false,
              "prep_time": "10 minutes",
              "cook_time": "15 minutes",
              "total_time": "25 minutes",
              "serves": "4",
              "instructions": [
                {
                  "original_text": "1. Preheat oven to 400Â°F (200Â°C).",
                  "input_condition": [
                    "cold skillet or oven"
                  ],
                  "task": [
                    {
                      "action_name": "1.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "oven"
                        ],
                        "failure": [
                          "Pan overheated or underheated"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "hot skillet or oven"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "2. Toss bell peppers, zucchini, and red onion with olive oil, salt, and black pepper.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "2.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "3. Roast for 20 minutes or until tender.",
                  "input_condition": [
                    "uncooked item"
                  ],
                  "task": [
                    {
                      "action_name": "3.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "oven"
                        ],
                        "failure": [
                          "Item overcooked or undercooked"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "baked or roasted item"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "4. Spread hummus on the tortilla.",
                  "input_condition": [
                    "mixed batter or rice"
                  ],
                  "task": [
                    {
                      "action_name": "4.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "bamboo mat"
                        ],
                        "failure": [
                          "Uneven spreading or pouring"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "batter spread evenly on skillet or rice spread on nori"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "5. Add roasted vegetables and roll up the tortilla.",
                  "input_condition": [
                    "uncooked item"
                  ],
                  "task": [
                    {
                      "action_name": "5.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "oven"
                        ],
                        "failure": [
                          "Item overcooked or undercooked"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "baked or roasted item"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                }
              ]
            },
            "Side": {
              "recipe_name": "Corn Spoon Bread",
              "food_role": [
                "Side",
                "American"
              ],
              "ingredients": [
                {
                  "name": "Cornmeal",
                  "quantity": {
                    "measure": "1 cup",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Milk",
                  "quantity": {
                    "measure": "1 cup",
                    "unit": ""
                  },
                  "allergies": "Dairy",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Eggs",
                  "quantity": {
                    "measure": "2",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Butter",
                  "quantity": {
                    "measure": "1/4 cup",
                    "unit": ""
                  },
                  "allergies": "Dairy",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                }
              ],
              "hasDairy": true,
              "hasMeat": false,
              "hasNuts": false,
              "prep_time": "10 minutes",
              "cook_time": "15 minutes",
              "total_time": "25 minutes",
              "serves": "4",
              "instructions": [
                {
                  "original_text": "1. Preheat oven to 350°F (175°C).",
                  "input_condition": [
                    "cold skillet or oven"
                  ],
                  "task": [
                    {
                      "action_name": "1.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "oven"
                        ],
                        "failure": [
                          "Pan overheated or underheated"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "hot skillet or oven"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "2. Mix cornmeal, milk, eggs, and melted butter until smooth.",
                  "input_condition": [
                    "dry and wet ingredients in separate bowls"
                  ],
                  "task": [
                    {
                      "action_name": "2.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "bowl",
                          "whisk"
                        ],
                        "failure": [
                          "Ingredients not fully combined"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "well-mixed ingredients"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "3. Pour into a greased baking dish.",
                  "input_condition": [
                    "mixed batter or rice"
                  ],
                  "task": [
                    {
                      "action_name": "3.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "bamboo mat"
                        ],
                        "failure": [
                          "Uneven spreading or pouring"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "batter spread evenly on skillet or rice spread on nori"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "4. Bake for 30-35 minutes, until golden brown and set in the center.",
                  "input_condition": [
                    "uncooked item"
                  ],
                  "task": [
                    {
                      "action_name": "4.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "oven"
                        ],
                        "failure": [
                          "Item overcooked or undercooked"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "baked or roasted item"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                }
              ]
            }
          },
          {
            "meal_name": "dinner",
            "meal_time": "20:00",
            "Beverage": {
              "recipe_name": "Spicy Margarita",
              "food_role": [
                "Beverage",
                "Mexican"
              ],
              "ingredients": [
                {
                  "name": "Tequila",
                  "quantity": {
                    "measure": "2 oz",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Lime Juice",
                  "quantity": {
                    "measure": "1 oz",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Triple Sec",
                  "quantity": {
                    "measure": "1/2 oz",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Hot Sauce",
                  "quantity": {
                    "measure": "2 dashes",
                    "unit": ""
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                }
              ],
              "hasDairy": false,
              "hasMeat": false,
              "hasNuts": false,
              "prep_time": "10 minutes",
              "cook_time": "15 minutes",
              "total_time": "25 minutes",
              "serves": "4",
              "instructions": [
                {
                  "original_text": "1. Combine all ingredients in a shaker with ice.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "1.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "2. Shake well and strain into a glass.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "2.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                }
              ]
            },
            "Main Course": {
              "recipe_name": "Cheesy Ramen Noodles",
              "food_role": [
                "Main Course",
                "Asian"
              ],
              "ingredients": [
                {
                  "name": "Ramen noodles",
                  "quantity": {
                    "measure": "2 packages",
                    "unit": "uncooked"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Cheese",
                  "quantity": {
                    "measure": "2 slices",
                    "unit": "American"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                }
              ],
              "hasDairy": true,
              "hasMeat": false,
              "hasNuts": false,
              "prep_time": "10 minutes",
              "cook_time": "15 minutes",
              "total_time": "25 minutes",
              "serves": "4",
              "instructions": [
                {
                  "original_text": "1. Cook ramen noodles according to package instructions.",
                  "input_condition": [
                    "raw food"
                  ],
                  "task": [
                    {
                      "action_name": "1.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "pan"
                        ],
                        "failure": [
                          "Food undercooked or burnt"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "cooked food"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "2. Add cheese slices to the hot noodles and stir until melted.",
                  "input_condition": [
                    "dry and wet ingredients in separate bowls"
                  ],
                  "task": [
                    {
                      "action_name": "2.",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "bowl",
                          "whisk"
                        ],
                        "failure": [
                          "Ingredients not fully combined"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "well-mixed ingredients"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                }
              ]
            },
            "Dessert": {
              "recipe_name": "Lemon Yogurt Cream Pie",
              "food_role": [
                "Dessert",
                "Mediterranean"
              ],
              "ingredients": [
                {
                  "name": "Graham cracker crust",
                  "quantity": {
                    "measure": "1",
                    "unit": "pre-made"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Greek yogurt",
                  "quantity": {
                    "measure": "2",
                    "unit": "cups"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Lemon juice",
                  "quantity": {
                    "measure": "1/4",
                    "unit": "cup"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Grated lemon zest",
                  "quantity": {
                    "measure": "1",
                    "unit": "tbsp"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Honey",
                  "quantity": {
                    "measure": "1/4",
                    "unit": "cup"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                }
              ],
              "hasDairy": false,
              "hasMeat": false,
              "hasNuts": false,
              "prep_time": "10 minutes",
              "cook_time": "15 minutes",
              "total_time": "25 minutes",
              "serves": "4",
              "instructions": [
                {
                  "original_text": "In a bowl, mix Greek yogurt, lemon juice, lemon zest, and honey until smooth.",
                  "input_condition": [
                    "dry and wet ingredients in separate bowls"
                  ],
                  "task": [
                    {
                      "action_name": "In",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "bowl",
                          "whisk"
                        ],
                        "failure": [
                          "Ingredients not fully combined"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "well-mixed ingredients"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "Pour mixture into the graham cracker crust.",
                  "input_condition": [
                    "dry and wet ingredients in separate bowls"
                  ],
                  "task": [
                    {
                      "action_name": "Pour",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "bowl",
                          "whisk"
                        ],
                        "failure": [
                          "Ingredients not fully combined"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "well-mixed ingredients"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "Chill in the refrigerator for at least 2 hours before serving.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "Chill",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                }
              ]
            },
            "Side": {
              "recipe_name": "Mediterranean Pastry Pinwheels",
              "food_role": [
                "Side",
                "Mediterranean"
              ],
              "ingredients": [
                {
                  "name": "Phyllo dough",
                  "quantity": {
                    "measure": "1",
                    "unit": "package"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Sun-dried tomatoes",
                  "quantity": {
                    "measure": "1/2",
                    "unit": "cup, chopped"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Pesto",
                  "quantity": {
                    "measure": "1/4",
                    "unit": "cup"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                },
                {
                  "name": "Parmesan cheese",
                  "quantity": {
                    "measure": "1/4",
                    "unit": "cup, grated"
                  },
                  "allergies": "",
                  "alternative": "",
                  "quality_characteristic": "",
                  "image": ""
                }
              ],
              "hasDairy": false,
              "hasMeat": false,
              "hasNuts": false,
              "prep_time": "10 minutes",
              "cook_time": "15 minutes",
              "total_time": "25 minutes",
              "serves": "4",
              "instructions": [
                {
                  "original_text": "Preheat oven to 375°F (190°C).",
                  "input_condition": [
                    "cold skillet or oven"
                  ],
                  "task": [
                    {
                      "action_name": "Preheat",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "oven"
                        ],
                        "failure": [
                          "Pan overheated or underheated"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "hot skillet or oven"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "Lay out phyllo dough sheets and brush with olive oil.",
                  "input_condition": [],
                  "task": [
                    {
                      "action_name": "Lay",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [],
                        "failure": []
                      }
                    }
                  ],
                  "output_condition": [],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "Spread sun-dried tomatoes, pesto, and Parmesan cheese evenly over the dough.",
                  "input_condition": [
                    "mixed batter or rice"
                  ],
                  "task": [
                    {
                      "action_name": "Spread",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "bamboo mat"
                        ],
                        "failure": [
                          "Uneven spreading or pouring"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "batter spread evenly on skillet or rice spread on nori"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "Roll up dough and slice into pinwheels.",
                  "input_condition": [
                    "whole food"
                  ],
                  "task": [
                    {
                      "action_name": "Roll",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "knife"
                        ],
                        "failure": [
                          "Inconsistent cuts"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "chopped or sliced food"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                },
                {
                  "original_text": "Place on a baking sheet and bake for 15-20 minutes, or until golden brown.",
                  "input_condition": [
                    "uncooked item"
                  ],
                  "task": [
                    {
                      "action_name": "Place",
                      "output_quality": [
                        "Achieve the described result."
                      ],
                      "background_knowledge": {
                        "tool": [
                          "oven"
                        ],
                        "failure": [
                          "Item overcooked or undercooked"
                        ]
                      }
                    }
                  ],
                  "output_condition": [
                    "baked or roasted item"
                  ],
                  "modality": {
                    "image": [],
                    "video": ""
                  }
                }
              ]
            }
          }
        ],
        "day 2": []
      }
]

function formatDate(dayString) {
  const today = new Date();
  const match = dayString.match(/\d+/);
  const dayOffset = match ? parseInt(match[0], 10) : 1;
  today.setDate(today.getDate() + dayOffset);

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(today);
}

function MealPlan() {
  const [selectedMeal, setSelectedMeal] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [expandedDay, setExpandedDay] = React.useState(null);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
    setOpen(true);
  };

  const handleToggleDay = (day) => {
    setExpandedDay((prev) => (prev === day ? null : day));
  };

  return (
    <div style={{ padding: '16px', background: 'linear-gradient(to right, #FFD194, #FF9A8B)' }}>
      <Grid container spacing={4} direction="column">
        {Object.keys(mealPlan[0]).map((day) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={day}>
            <Card
              variant="outlined"
              sx={{
                margin: '10px auto',
                padding: '10px',
                background: 'linear-gradient(to right, #ffafbd, #ffc3a0)',
                borderRadius: '12px',
                maxWidth: '100%', // Ensure the card doesn't overflow its container
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center" sx={{ mb: 2, color: '#fff' }}>
                  {formatDate(day)}
                </Typography>
                <IconButton
                  onClick={() => handleToggleDay(day)}
                  sx={{ mb: 2 }}
                >
                  {expandedDay === day ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
                <Collapse in={expandedDay === day}>
                  <DayCard
                    meals={mealPlan[0][day]}
                    onMealClick={handleMealClick}
                  />
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedMeal && (
        <MealDetail
          meal={selectedMeal}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

export default MealPlan;
