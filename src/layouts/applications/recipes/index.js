import React, { useState  } from "react";
// import axios from "axios";
import { Box as MDBox, Typography as MDTypography, Button as MDButton } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { BreakfastDining as BreakfastIcon, LunchDining as LunchIcon, DinnerDining as DinnerIcon } from '@mui/icons-material'; 
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Header from "layouts/pages/profile/components/Header";
import { useMaterialUIController } from "context";

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
        ]
      }
]
function Kanban() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [expandedInstructions, setExpandedInstructions] = useState(false);
  const [expandedIngredients, setExpandedIngredients] = useState(false);
  const [expandedMeal , setExpandedMeal] = useState(false)
  const [expandedDay, setExpandedDay] = useState(null);
  // const [mealPlan, setMealPlan] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:7000/recommendation/recipeRecommendation", {
  //         headers: {
  //           'jwt-token': `${localStorage.getItem('jwtToken')}`
  //         }
  //       });
  //       setMealPlan(response.data.meal_plan);
  //       console.log(mealPlan)
  //     } catch (error) {
  //       console.error("There was an error fetching the meal plan:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleToggleInstructions = () => setExpandedInstructions(!expandedInstructions);
  const handleToggleIngredients = () => setExpandedIngredients(!expandedIngredients);
  const handleExpandDay = (dayId) => setExpandedDay(expandedDay === dayId ? null : dayId);
  const handleMeal = () => setExpandedMeal(!expandedMeal)
  const icons = {
    breakfast: <BreakfastIcon sx={{ fontSize: 80, color: "#FFA500" }} />,
    lunch: <LunchIcon sx={{ fontSize: 80, color: "#FFA500" }} />,
    dinner: <DinnerIcon sx={{ fontSize: 80, color: "#FFA500" }} />
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Header />
        <MDBox
          position="relative"
          my={4}
          sx={({
            palette: { light, background },
            functions: { pxToRem },
            borders: { borderRadius },
          }) => ({
            "& .react-kanban-column": {
              backgroundColor: darkMode ? background.card : light.main,
              width: "100%",
              margin: `0 ${pxToRem(10)}`,
              padding: pxToRem(20),
              borderRadius: borderRadius.lg,
              boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
            },
          })}
        >
          {mealPlan.map((dayPlan, index) => {
            const dayKey = `day ${index + 1}`;
            return (
              <MDBox key={dayKey} mb={4}>
                <MDBox
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                  sx={{ borderBottom: '2px solid #FFA500', pb: 1 }}
                >
                  <MDTypography variant="h4" sx={{ fontWeight: 'bold', color: '#FFA500' }}>{dayKey}</MDTypography>
                  <MDButton
                    size="small"
                    onClick={() => handleExpandDay(dayKey)}
                    sx={{
                      color: '#FFA500',
                      backgroundColor: 'rgba(255, 165, 0, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 165, 0, 0.2)',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'background-color 0.3s, box-shadow 0.3s',
                      borderRadius: 1,
                      padding: 0.5
                    }}
                  >
                    {expandedDay === dayKey ? <ExpandLess sx={{ fontSize: 20 }} /> : <ExpandMore sx={{ fontSize: 20 }} />}
                  </MDButton>
                </MDBox>
                <Collapse in={expandedDay === dayKey}>
                  <MDBox display="flex" flexDirection="column" gap={2}>
                    {dayPlan[dayKey].map(meal => (
                      <MDBox key={meal.meal_name} display="flex" flexDirection="column" mb={3}>
                        <MDTypography variant="h6" sx={{ color: "#FFA500", fontWeight: 'bold' }}>
                          {icons[meal.meal_name]} 
                          {meal.meal_name} - {meal.meal_time}
                          <MDButton
                                        size="small"
                                        onClick={handleMeal}
                                        sx={{
                                          color: '#FFA500',
                                          backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                          '&:hover': {
                                            backgroundColor: 'rgba(255, 165, 0, 0.2)',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                          },
                                          transition: 'background-color 0.3s, box-shadow 0.3s',
                                          borderRadius: 1,
                                          padding: 0.5,
                                          marginLeft : 2,
                                        }}
                                      >
                                        {expandedMeal ? <ExpandLess sx={{ fontSize: 20 }} /> : <ExpandMore sx={{ fontSize: 20 }} />}
                                      </MDButton>
                        </MDTypography>
                        <Collapse in={expandedMeal}>
                        <MDBox display="flex" flexDirection="row" justifyContent="center" gap={3} mt={2}>
                          {Object.entries(meal).map(([mealType, details]) => {
                            if (mealType !== "meal_name" && mealType !== "meal_time") {
                              return (
                                <Card key={mealType} sx={{
                                  minWidth: 300,
                                  maxWidth: 400,
                                  borderRadius: 2,
                                  boxShadow: 3,
                                  border: '1px solid #FFA500',
                                  marginBottom: 2,
                                  '&:hover': {
                                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                                    transform: 'scale(1.02)',
                                    transition: 'all 0.3s ease'
                                  }
                                }}>
                                  <CardContent>
                                    <MDTypography variant="h6" color="textPrimary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                      {icons[meal.meal_name]} {details.recipe_name}
                                    </MDTypography>
                                    <Divider sx={{ my: 1, bgcolor: '#FFA500' }} />
                                    <MDTypography variant="body2" color="textSecondary">
                                      {details.food_role.join(", ")}
                                    </MDTypography>
                                    <MDTypography variant="body2" color="textSecondary">
                                      Prep Time: {details.prep_time}
                                    </MDTypography>
                                    <MDTypography variant="body2" color="textSecondary">
                                      Cook Time: {details.cook_time}
                                    </MDTypography>
                                    <MDTypography variant="body2" color="textSecondary">
                                      Serves: {details.serves}
                                    </MDTypography>
                                    <Divider sx={{ my: 1, bgcolor: '#FFA500' }} />
                                    <MDTypography variant="body1" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                                      Ingredients:
                                      <MDButton
                                        size="small"
                                        onClick={handleToggleIngredients}
                                        sx={{
                                          color: '#FFA500',
                                          backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                          '&:hover': {
                                            backgroundColor: 'rgba(255, 165, 0, 0.2)',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                          },
                                          transition: 'background-color 0.3s, box-shadow 0.3s',
                                          borderRadius: 1,
                                          padding: 0.5
                                        }}
                                      >
                                        {expandedIngredients ? <ExpandLess sx={{ fontSize: 20 }} /> : <ExpandMore sx={{ fontSize: 20 }} />}
                                      </MDButton>
                                    </MDTypography>
                                    <Collapse in={expandedIngredients}>
                                      <List>
                                        {details.ingredients.map((ingredient) => (
                                          <ListItem key={ingredient.name} sx={{ borderBottom: '1px solid #FFA500' }}>
                                            <MDTypography variant="body2" color="textSecondary">
                                              {ingredient.name} ({ingredient.quantity.measure} {ingredient.quantity.unit})
                                            </MDTypography>
                                          </ListItem>
                                        ))}
                                      </List>
                                    </Collapse>
                                    <Divider sx={{ my: 1, bgcolor: '#FFA500' }} />
                                    <MDTypography variant="body1" color="textPrimary" sx={{ fontWeight: 'bold' }}>
                                      Instructions:
                                      <MDButton
                                        size="small"
                                        onClick={handleToggleInstructions}
                                        sx={{
                                          color: '#FFA500',
                                          backgroundColor: 'rgba(255, 165, 0, 0.1)',
                                          '&:hover': {
                                            backgroundColor: 'rgba(255, 165, 0, 0.2)',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                          },
                                          transition: 'background-color 0.3s, box-shadow 0.3s',
                                          borderRadius: 1,
                                          padding: 0.5
                                        }}
                                      >
                                        {expandedInstructions ? <ExpandLess sx={{ fontSize: 20 }} /> : <ExpandMore sx={{ fontSize: 20 }} />}
                                      </MDButton>
                                    </MDTypography>
                                    <Collapse in={expandedInstructions}>
                                      {details.instructions.map((instruction) => (
                                        <MDTypography key={instruction.original_text} variant="body2" color="textSecondary" paragraph>
                                          {instruction.original_text}
                                        </MDTypography>
                                      ))}
                                    </Collapse>
                                  </CardContent>
                                </Card>
                              );
                            }
                            return null;
                          })}
                        </MDBox>
                        </Collapse>
                      </MDBox>
                    ))}
                  </MDBox>
                </Collapse>
              </MDBox>
            );
          })}
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Kanban;