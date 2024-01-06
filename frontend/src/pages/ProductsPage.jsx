import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/Products/ProductList'


const data=[{
    "_id": {
      "$oid": "659933c470a1c176523d6eb5"
    },
    "name": "Backpack",
    "Category": "Accessories",
    "price": 73,
    "Size": "XL",
    "Color": "Brown",
    "Season": "Summer",
    "Shipping Type": "Store Pickup",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Weekly",
    "Description": "Functional carryall designed for comfort, storage, and mobility.",
    "Qty_Sold_01": 460,
    "Qty_Sold_02": 720,
    "Qty_Sold_03": 834,
    "Qty_Sold_04": 681,
    "Qty_Sold_05": 845,
    "Qty_Sold_06": 336,
    "Qty_Sold_07": 389,
    "Qty_Sold_08": 742,
    "Qty_Sold_09": 910,
    "Qty_Sold_10": 221,
    "Qty_Sold_11": 350,
    "Qty_Sold_12": 364
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6eb6"
    },
    "name": "Blouse",
    "Category": "Clothing",
    "price": 53,
    "Size": "L",
    "Color": "Gray",
    "Season": "Winter",
    "Shipping Type": "Express",
    "Payment Method": "Venmo",
    "Frequency of Purchases": "Fortnightly",
    "Description": "Chic top enhancing your wardrobe with sophistication and versatility.",
    "Qty_Sold_01": 140,
    "Qty_Sold_02": 673,
    "Qty_Sold_03": 989,
    "Qty_Sold_04": 915,
    "Qty_Sold_05": 723,
    "Qty_Sold_06": 988,
    "Qty_Sold_07": 884,
    "Qty_Sold_08": 620,
    "Qty_Sold_09": 460,
    "Qty_Sold_10": 342,
    "Qty_Sold_11": 264,
    "Qty_Sold_12": 529
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6eb7"
    },
    "name": "Boots",
    "Category": "Footwear",
    "price": 83,
    "Size": "S",
    "Color": "Green",
    "Season": "Fall",
    "Shipping Type": "Standard",
    "Payment Method": "Debit Card",
    "Frequency of Purchases": "Fortnightly",
    "Description": "Chic top enhancing your wardrobe with sophistication and versatility.",
    "Qty_Sold_01": 310,
    "Qty_Sold_02": 104,
    "Qty_Sold_03": 868,
    "Qty_Sold_04": 945,
    "Qty_Sold_05": 565,
    "Qty_Sold_06": 234,
    "Qty_Sold_07": 625,
    "Qty_Sold_08": 508,
    "Qty_Sold_09": 485,
    "Qty_Sold_10": 623,
    "Qty_Sold_11": 590,
    "Qty_Sold_12": 118
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6eb8"
    },
    "name": "Coat",
    "Category": "Outerwear",
    "price": 97,
    "Size": "L",
    "Color": "Silver",
    "Season": "Summer",
    "Shipping Type": "Express",
    "Payment Method": "Venmo",
    "Frequency of Purchases": "Annually",
    "Description": "Sturdy footwear providing comfort, support, and rugged style.",
    "Qty_Sold_01": 180,
    "Qty_Sold_02": 887,
    "Qty_Sold_03": 636,
    "Qty_Sold_04": 295,
    "Qty_Sold_05": 354,
    "Qty_Sold_06": 599,
    "Qty_Sold_07": 760,
    "Qty_Sold_08": 579,
    "Qty_Sold_09": 659,
    "Qty_Sold_10": 229,
    "Qty_Sold_11": 410,
    "Qty_Sold_12": 777
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6eb9"
    },
    "name": "Dress",
    "Category": "Clothing",
    "price": 51,
    "Size": "M",
    "Color": "Violet",
    "Season": "Spring",
    "Shipping Type": "Express",
    "Payment Method": "PayPal",
    "Frequency of Purchases": "Weekly",
    "Description": "Outerwear essential for warmth, protection, and timeless elegance.",
    "Qty_Sold_01": 80,
    "Qty_Sold_02": 112,
    "Qty_Sold_03": 102,
    "Qty_Sold_04": 167,
    "Qty_Sold_05": 633,
    "Qty_Sold_06": 570,
    "Qty_Sold_07": 339,
    "Qty_Sold_08": 118,
    "Qty_Sold_09": 514,
    "Qty_Sold_10": 184,
    "Qty_Sold_11": 890,
    "Qty_Sold_12": 225
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6eba"
    },
    "name": "Handbag",
    "Category": "Accessories",
    "price": 31,
    "Size": "M",
    "Color": "Pink",
    "Season": "Spring",
    "Shipping Type": "2-Day Shipping",
    "Payment Method": "Cash",
    "Frequency of Purchases": "Quarterly",
    "Description": "Outerwear essential for warmth, protection, and timeless elegance.",
    "Qty_Sold_01": 370,
    "Qty_Sold_02": 577,
    "Qty_Sold_03": 243,
    "Qty_Sold_04": 610,
    "Qty_Sold_05": 919,
    "Qty_Sold_06": 957,
    "Qty_Sold_07": 255,
    "Qty_Sold_08": 88,
    "Qty_Sold_09": 446,
    "Qty_Sold_10": 600,
    "Qty_Sold_11": 127,
    "Qty_Sold_12": 641
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ebb"
    },
    "name": "Hat",
    "Category": "Accessories",
    "price": 53,
    "Size": "S",
    "Color": "Silver",
    "Season": "Summer",
    "Shipping Type": "Free Shipping",
    "Payment Method": "PayPal",
    "Frequency of Purchases": "Weekly",
    "Description": "Outerwear essential for warmth, protection, and timeless elegance.",
    "Qty_Sold_01": 340,
    "Qty_Sold_02": 677,
    "Qty_Sold_03": 933,
    "Qty_Sold_04": 918,
    "Qty_Sold_05": 804,
    "Qty_Sold_06": 96,
    "Qty_Sold_07": 918,
    "Qty_Sold_08": 242,
    "Qty_Sold_09": 326,
    "Qty_Sold_10": 601,
    "Qty_Sold_11": 345,
    "Qty_Sold_12": 708
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ebc"
    },
    "name": "Jacket",
    "Category": "Outerwear",
    "price": 22,
    "Size": "M",
    "Color": "Green",
    "Season": "Fall",
    "Shipping Type": "Store Pickup",
    "Payment Method": "Debit Card",
    "Frequency of Purchases": "Weekly",
    "Description": "Outerwear essential for warmth, protection, and timeless elegance.",
    "Qty_Sold_01": 150,
    "Qty_Sold_02": 733,
    "Qty_Sold_03": 846,
    "Qty_Sold_04": 307,
    "Qty_Sold_05": 202,
    "Qty_Sold_06": 348,
    "Qty_Sold_07": 762,
    "Qty_Sold_08": 808,
    "Qty_Sold_09": 523,
    "Qty_Sold_10": 702,
    "Qty_Sold_11": 298,
    "Qty_Sold_12": 231
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ebd"
    },
    "name": "Jeans",
    "Category": "Clothing",
    "price": 73,
    "Size": "S",
    "Color": "Maroon",
    "Season": "Spring",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Weekly",
    "Description": "Outerwear essential for warmth, protection, and timeless elegance.",
    "Qty_Sold_01": 350,
    "Qty_Sold_02": 436,
    "Qty_Sold_03": 814,
    "Qty_Sold_04": 135,
    "Qty_Sold_05": 712,
    "Qty_Sold_06": 427,
    "Qty_Sold_07": 368,
    "Qty_Sold_08": 634,
    "Qty_Sold_09": 172,
    "Qty_Sold_10": 969,
    "Qty_Sold_11": 875,
    "Qty_Sold_12": 386
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ebe"
    },
    "name": "Jewelry",
    "Category": "Accessories",
    "price": 20,
    "Size": "M",
    "Color": "Red",
    "Season": "Spring",
    "Shipping Type": "Next Day Air",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Annually",
    "Description": "Outerwear essential for warmth, protection, and timeless elegance.",
    "Qty_Sold_01": 170,
    "Qty_Sold_02": 237,
    "Qty_Sold_03": 275,
    "Qty_Sold_04": 822,
    "Qty_Sold_05": 225,
    "Qty_Sold_06": 337,
    "Qty_Sold_07": 743,
    "Qty_Sold_08": 483,
    "Qty_Sold_09": 255,
    "Qty_Sold_10": 694,
    "Qty_Sold_11": 232,
    "Qty_Sold_12": 106
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ebf"
    },
    "name": "Sandals",
    "Category": "Footwear",
    "price": 90,
    "Size": "M",
    "Color": "Maroon",
    "Season": "Spring",
    "Shipping Type": "Next Day Air",
    "Payment Method": "PayPal",
    "Frequency of Purchases": "Weekly",
    "Description": "Outerwear essential for warmth, protection, and timeless elegance.",
    "Qty_Sold_01": 490,
    "Qty_Sold_02": 248,
    "Qty_Sold_03": 599,
    "Qty_Sold_04": 678,
    "Qty_Sold_05": 649,
    "Qty_Sold_06": 789,
    "Qty_Sold_07": 561,
    "Qty_Sold_08": 109,
    "Qty_Sold_09": 148,
    "Qty_Sold_10": 528,
    "Qty_Sold_11": 85,
    "Qty_Sold_12": 840
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec0"
    },
    "name": "Scarf",
    "Category": "Accessories",
    "price": 39,
    "Size": "M",
    "Color": "Orange",
    "Season": "Spring",
    "Shipping Type": "Standard",
    "Payment Method": "Venmo",
    "Frequency of Purchases": "Annually",
    "Description": "Feminine garment perfect for effortless elegance and comfort.",
    "Qty_Sold_01": 310,
    "Qty_Sold_02": 924,
    "Qty_Sold_03": 205,
    "Qty_Sold_04": 92,
    "Qty_Sold_05": 356,
    "Qty_Sold_06": 110,
    "Qty_Sold_07": 809,
    "Qty_Sold_08": 472,
    "Qty_Sold_09": 644,
    "Qty_Sold_10": 502,
    "Qty_Sold_11": 531,
    "Qty_Sold_12": 357
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec1"
    },
    "name": "Shirt",
    "Category": "Clothing",
    "price": 85,
    "Size": "M",
    "Color": "Gray",
    "Season": "Fall",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Cash",
    "Frequency of Purchases": "Quarterly",
    "Description": "Feminine garment perfect for effortless elegance and comfort.",
    "Qty_Sold_01": 360,
    "Qty_Sold_02": 89,
    "Qty_Sold_03": 866,
    "Qty_Sold_04": 119,
    "Qty_Sold_05": 149,
    "Qty_Sold_06": 175,
    "Qty_Sold_07": 233,
    "Qty_Sold_08": 626,
    "Qty_Sold_09": 342,
    "Qty_Sold_10": 925,
    "Qty_Sold_11": 119,
    "Qty_Sold_12": 317
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec2"
    },
    "name": "Shoes",
    "Category": "Footwear",
    "price": 34,
    "Size": "L",
    "Color": "Purple",
    "Season": "Fall",
    "Shipping Type": "Store Pickup",
    "Payment Method": "Bank Transfer",
    "Frequency of Purchases": "Bi-Weekly",
    "Description": "Stylish accessory for carrying essentials with elegance and convenience.",
    "Qty_Sold_01": 40,
    "Qty_Sold_02": 639,
    "Qty_Sold_03": 894,
    "Qty_Sold_04": 757,
    "Qty_Sold_05": 960,
    "Qty_Sold_06": 245,
    "Qty_Sold_07": 307,
    "Qty_Sold_08": 313,
    "Qty_Sold_09": 680,
    "Qty_Sold_10": 631,
    "Qty_Sold_11": 530,
    "Qty_Sold_12": 711
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec3"
    },
    "name": "Shorts",
    "Category": "Clothing",
    "price": 34,
    "Size": "L",
    "Color": "Charcoal",
    "Season": "Winter",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Weekly",
    "Description": "Stylish accessory for carrying essentials with elegance and convenience.",
    "Qty_Sold_01": 410,
    "Qty_Sold_02": 150,
    "Qty_Sold_03": 179,
    "Qty_Sold_04": 795,
    "Qty_Sold_05": 85,
    "Qty_Sold_06": 865,
    "Qty_Sold_07": 880,
    "Qty_Sold_08": 188,
    "Qty_Sold_09": 336,
    "Qty_Sold_10": 535,
    "Qty_Sold_11": 831,
    "Qty_Sold_12": 971
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec4"
    },
    "name": "Skirt",
    "Category": "Clothing",
    "price": 81,
    "Size": "M",
    "Color": "Teal",
    "Season": "Winter",
    "Shipping Type": "Store Pickup",
    "Payment Method": "PayPal",
    "Frequency of Purchases": "Monthly",
    "Description": "Stylish accessory for carrying essentials with elegance and convenience.",
    "Qty_Sold_01": 310,
    "Qty_Sold_02": 122,
    "Qty_Sold_03": 514,
    "Qty_Sold_04": 387,
    "Qty_Sold_05": 347,
    "Qty_Sold_06": 861,
    "Qty_Sold_07": 459,
    "Qty_Sold_08": 745,
    "Qty_Sold_09": 976,
    "Qty_Sold_10": 81,
    "Qty_Sold_11": 951,
    "Qty_Sold_12": 194
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec5"
    },
    "name": "Sneakers",
    "Category": "Footwear",
    "price": 20,
    "Size": "M",
    "Color": "White",
    "Season": "Summer",
    "Shipping Type": "Standard",
    "Payment Method": "Venmo",
    "Frequency of Purchases": "Weekly",
    "Description": "Fashionable headwear for sun protection and stylish flair.",
    "Qty_Sold_01": 450,
    "Qty_Sold_02": 502,
    "Qty_Sold_03": 269,
    "Qty_Sold_04": 684,
    "Qty_Sold_05": 327,
    "Qty_Sold_06": 694,
    "Qty_Sold_07": 408,
    "Qty_Sold_08": 693,
    "Qty_Sold_09": 490,
    "Qty_Sold_10": 414,
    "Qty_Sold_11": 294,
    "Qty_Sold_12": 496
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec6"
    },
    "name": "Sunglasses",
    "Category": "Accessories",
    "price": 36,
    "Size": "S",
    "Color": "Gray",
    "Season": "Spring",
    "Shipping Type": "Next Day Air",
    "Payment Method": "Debit Card",
    "Frequency of Purchases": "Bi-Weekly",
    "Description": "Versatile outerwear piece for added style and comfort.",
    "Qty_Sold_01": 160,
    "Qty_Sold_02": 658,
    "Qty_Sold_03": 328,
    "Qty_Sold_04": 87,
    "Qty_Sold_05": 279,
    "Qty_Sold_06": 616,
    "Qty_Sold_07": 240,
    "Qty_Sold_08": 767,
    "Qty_Sold_09": 107,
    "Qty_Sold_10": 897,
    "Qty_Sold_11": 423,
    "Qty_Sold_12": 787
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec7"
    },
    "name": "Sweater",
    "Category": "Clothing",
    "price": 64,
    "Size": "L",
    "Color": "Maroon",
    "Season": "Winter",
    "Shipping Type": "Express",
    "Payment Method": "Cash",
    "Frequency of Purchases": "Fortnightly",
    "Description": "Versatile outerwear piece for added style and comfort.",
    "Qty_Sold_01": 370,
    "Qty_Sold_02": 439,
    "Qty_Sold_03": 221,
    "Qty_Sold_04": 723,
    "Qty_Sold_05": 302,
    "Qty_Sold_06": 699,
    "Qty_Sold_07": 86,
    "Qty_Sold_08": 250,
    "Qty_Sold_09": 319,
    "Qty_Sold_10": 566,
    "Qty_Sold_11": 968,
    "Qty_Sold_12": 693
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec8"
    },
    "name": "Belt",
    "Category": "Accessories",
    "price": 35,
    "Size": "L",
    "Color": "Purple",
    "Season": "Summer",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Annually",
    "Description": "Stylish accessory for defining your waist and enhancing outfits.",
    "Qty_Sold_01": 807,
    "Qty_Sold_02": 783,
    "Qty_Sold_03": 523,
    "Qty_Sold_04": 259,
    "Qty_Sold_05": 771,
    "Qty_Sold_06": 784,
    "Qty_Sold_07": 410,
    "Qty_Sold_08": 774,
    "Qty_Sold_09": 171,
    "Qty_Sold_10": 743,
    "Qty_Sold_11": 803,
    "Qty_Sold_12": 172
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ec9"
    },
    "name": "Gloves",
    "Category": "Accessories",
    "price": 90,
    "Size": "S",
    "Color": "Gold",
    "Season": "Spring",
    "Shipping Type": "Express",
    "Payment Method": "Venmo",
    "Frequency of Purchases": "Every 3 Months",
    "Description": "Functional handwear providing warmth and protection in cold weather.",
    "Qty_Sold_01": 754,
    "Qty_Sold_02": 656,
    "Qty_Sold_03": 920,
    "Qty_Sold_04": 989,
    "Qty_Sold_05": 129,
    "Qty_Sold_06": 188,
    "Qty_Sold_07": 723,
    "Qty_Sold_08": 278,
    "Qty_Sold_09": 675,
    "Qty_Sold_10": 332,
    "Qty_Sold_11": 672,
    "Qty_Sold_12": 817
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6eca"
    },
    "name": "Hoodie",
    "Category": "Clothing",
    "price": 26,
    "Size": "L",
    "Color": "Pink",
    "Season": "Spring",
    "Shipping Type": "2-Day Shipping",
    "Payment Method": "Cash",
    "Frequency of Purchases": "Bi-Weekly",
    "Description": "Casual and comfortable sweatshirt with a built-in hood for versatility.",
    "Qty_Sold_01": 615,
    "Qty_Sold_02": 491,
    "Qty_Sold_03": 481,
    "Qty_Sold_04": 152,
    "Qty_Sold_05": 262,
    "Qty_Sold_06": 235,
    "Qty_Sold_07": 594,
    "Qty_Sold_08": 589,
    "Qty_Sold_09": 642,
    "Qty_Sold_10": 247,
    "Qty_Sold_11": 118,
    "Qty_Sold_12": 992
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ecb"
    },
    "name": "Pants",
    "Category": "Clothing",
    "price": 77,
    "Size": "S",
    "Color": "Olive",
    "Season": "Spring",
    "Shipping Type": "2-Day Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Every 3 Months",
    "Description": "Versatile bottom wear offering comfort and style for various occasions.",
    "Qty_Sold_01": 855,
    "Qty_Sold_02": 652,
    "Qty_Sold_03": 799,
    "Qty_Sold_04": 122,
    "Qty_Sold_05": 910,
    "Qty_Sold_06": 467,
    "Qty_Sold_07": 257,
    "Qty_Sold_08": 800,
    "Qty_Sold_09": 170,
    "Qty_Sold_10": 804,
    "Qty_Sold_11": 759,
    "Qty_Sold_12": 274
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ecc"
    },
    "name": "Socks",
    "Category": "Clothing",
    "price": 93,
    "Size": "L",
    "Color": "Violet",
    "Season": "Winter",
    "Shipping Type": "Next Day Air",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Quarterly",
    "Description": "Essential footwear accessory providing comfort, warmth, and moisture control.",
    "Qty_Sold_01": 200,
    "Qty_Sold_02": 514,
    "Qty_Sold_03": 412,
    "Qty_Sold_04": 386,
    "Qty_Sold_05": 771,
    "Qty_Sold_06": 910,
    "Qty_Sold_07": 859,
    "Qty_Sold_08": 783,
    "Qty_Sold_09": 682,
    "Qty_Sold_10": 149,
    "Qty_Sold_11": 439,
    "Qty_Sold_12": 428
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ecd"
    },
    "name": "T-shirt",
    "Category": "Clothing",
    "price": 25,
    "Size": "M",
    "Color": "Orange",
    "Season": "Fall",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Monthly",
    "Description": "Classic casual top for everyday comfort and effortless style.",
    "Qty_Sold_01": 671,
    "Qty_Sold_02": 212,
    "Qty_Sold_03": 559,
    "Qty_Sold_04": 276,
    "Qty_Sold_05": 233,
    "Qty_Sold_06": 438,
    "Qty_Sold_07": 534,
    "Qty_Sold_08": 280,
    "Qty_Sold_09": 235,
    "Qty_Sold_10": 506,
    "Qty_Sold_11": 413,
    "Qty_Sold_12": 331
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ece"
    },
    "name": "Bracelet",
    "Category": "Accessories",
    "price": 89,
    "Size": "S",
    "Color": "Black",
    "Season": "Winter",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Monthly",
    "Description": "Elegant wrist adornment adding a touch of sophistication to your look.",
    "Qty_Sold_01": 671,
    "Qty_Sold_02": 212,
    "Qty_Sold_03": 559,
    "Qty_Sold_04": 276,
    "Qty_Sold_05": 233,
    "Qty_Sold_06": 438,
    "Qty_Sold_07": 534,
    "Qty_Sold_08": 280,
    "Qty_Sold_09": 235,
    "Qty_Sold_10": 506,
    "Qty_Sold_11": 413,
    "Qty_Sold_12": 331
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ecf"
    },
    "name": "Glasses",
    "Category": "Accessories",
    "price": 99,
    "Size": "L",
    "Color": "Black",
    "Season": "Spring",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Every 3 Months",
    "Description": "Vision-correcting eyewear with frames designed for style and functionality.",
    "Qty_Sold_01": 671,
    "Qty_Sold_02": 212,
    "Qty_Sold_03": 559,
    "Qty_Sold_04": 276,
    "Qty_Sold_05": 233,
    "Qty_Sold_06": 438,
    "Qty_Sold_07": 534,
    "Qty_Sold_08": 280,
    "Qty_Sold_09": 235,
    "Qty_Sold_10": 506,
    "Qty_Sold_11": 413,
    "Qty_Sold_12": 331
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ed0"
    },
    "name": "Earmuffs",
    "Category": "Accessories",
    "price": 66,
    "Size": "S",
    "Color": "Blue",
    "Season": "Winter",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Every 3 Months",
    "Description": "Cozy ear protectors offering warmth and comfort in cold conditions.",
    "Qty_Sold_01": 671,
    "Qty_Sold_02": 212,
    "Qty_Sold_03": 559,
    "Qty_Sold_04": 276,
    "Qty_Sold_05": 233,
    "Qty_Sold_06": 438,
    "Qty_Sold_07": 534,
    "Qty_Sold_08": 280,
    "Qty_Sold_09": 235,
    "Qty_Sold_10": 506,
    "Qty_Sold_11": 413,
    "Qty_Sold_12": 331
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ed1"
    },
    "name": "Ties",
    "Category": "Clothing",
    "price": 45,
    "Size": "M",
    "Color": "Orange",
    "Season": "Winter",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Every 3 Months",
    "Description": "Formal neckwear enhancing professional attire with elegance and style.",
    "Qty_Sold_01": 671,
    "Qty_Sold_02": 212,
    "Qty_Sold_03": 559,
    "Qty_Sold_04": 276,
    "Qty_Sold_05": 233,
    "Qty_Sold_06": 438,
    "Qty_Sold_07": 534,
    "Qty_Sold_08": 280,
    "Qty_Sold_09": 235,
    "Qty_Sold_10": 506,
    "Qty_Sold_11": 413,
    "Qty_Sold_12": 331
  },
  {
    "_id": {
      "$oid": "659933c470a1c176523d6ed2"
    },
    "name": "Kimono",
    "Category": "Clothing",
    "price": 92,
    "Size": "M",
    "Color": "Pink",
    "Season": "Winter",
    "Shipping Type": "Free Shipping",
    "Payment Method": "Credit Card",
    "Frequency of Purchases": "Every 3 Months",
    "Description": "Traditional Japanese garment known for its intricate designs and cultural significance.",
    "Qty_Sold_01": 930,
    "Qty_Sold_02": 683,
    "Qty_Sold_03": 193,
    "Qty_Sold_04": 619,
    "Qty_Sold_05": 307,
    "Qty_Sold_06": 762,
    "Qty_Sold_07": 466,
    "Qty_Sold_08": 432,
    "Qty_Sold_09": 638,
    "Qty_Sold_10": 308,
    "Qty_Sold_11": 451,
    "Qty_Sold_12": 543
  }]

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newProduct, setNewProduct] = useState({
        SKU: '',
        name: '',
        orderedQuantity: 0,
        stockLevel: 0,
        restockingLeadTime: 0,
        ratio: 0,
        comments: '',
    });

    useEffect(() => {
        // Fetch products from the backend API
        axios.get('http://localhost:3000/products')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    }, []);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = () => {
        // Send a POST request to add a new product
        axios.post('http://localhost:3000/product', newProduct)
        .then(response => {
            setProducts([...products, response.data]);
            setNewProduct({
            SKU: '',
            name: '',
            orderedQuantity: 0,
            stockLevel: 0,
            restockingLeadTime: 0,
            ratio: 0,
            comments: '',
            });
            setShowAddForm(false);
        })
        .catch(error => console.error('Error adding product:', error));
    };
    return (
        <div className='w-full h-full p-5 pl-0'>
            <div className='w-full h-full flex flex-col opacity-90 text-white text-xl rounded-xl'>
                <div className='text-black text-6xl px-6 py-8 font-semibold'>
                    Products Page
                </div>
                <div className='p-4'>
                    <ProductList data={data} />
                </div>
                <div className='w-full px-4'>
                    <button onClick={() => setShowAddForm(true)} className='px-4 py-2 bg-green-500 rounded-lg'>
                        Add Product
                    </button>
                </div>
                <div className='text-black p-4'>
                    {showAddForm && (
                        <div className='p-4 bg-white rounded-lg w-fit'>
                            <h2 className='py-2'>Add New Product</h2>
                            <form className='flex flex-col items-start gap-2'>
                                <label>
                                    SKU:
                                    <input type="text" name="SKU" value={newProduct.SKU} onChange={handleInputChange} />
                                </label>
                                <label>
                                    Name:
                                    <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
                                </label>
                                {/* Add other input fields for the remaining product attributes */}
                                <button type="button" onClick={handleAddProduct} className='px-4 py-2 bg-green-500 rounded-lg'>
                                    Add Product
                                </button>
                            </form>
                        </div>
                    )}
                    <table>
                        {/* Table remains the same as before */}
                    </table>
                    </div>
            </div>
        </div>
    )
}

export default ProductsPage