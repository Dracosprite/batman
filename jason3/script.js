
    const products = [
        { model: "Product A", price: 500, color: "red", quantity: 10 },
        { model: "Product B", price: 1500, color: "green", quantity: 20 },
        { model: "Product C", price: 700, color: "blue", quantity: 15 },
        // ... existing products ...
        { model: "Product 4", price: 600, color: "yellow", quantity: 12 },
        { model: "Product 5", price: 800, color: "purple", quantity: 18 },
        { model: "Product 6", price: 300, color: "orange", quantity: 25 },
        { model: "Product 7", price: 900, color: "pink", quantity: 5 },
        { model: "Product 8", price: 450, color: "cyan", quantity: 22 },
        { model: "Product 9", price: 1200, color: "magenta", quantity: 30 },
        { model: "Product 10", price: 350, color: "brown", quantity: 8 },
        { model: "Product 11", price: 750, color: "grey", quantity: 14 },
        { model: "Product 12", price: 950, color: "lime", quantity: 19 },
        { model: "Product 13", price: 1100, color: "teal", quantity: 11 },
        { model: "Product 14", price: 400, color: "navy", quantity: 16 },
        { model: "Product 15", price: 200, color: "olive", quantity: 9 },
        { model: "Product 16", price: 300, color: "maroon", quantity: 27 },
        { model: "Product 17", price: 500, color: "silver", quantity: 13 },
        { model: "Product 18", price: 600, color: "gold", quantity: 21 },
        { model: "Product 19", price: 700, color: "coral", quantity: 17 },
        { model: "Product 20", price: 800, color: "salmon", quantity: 23 },
        { model: "Product 21", price: 900, color: "lavender", quantity: 6 },
        { model: "Product 22", price: 1000, color: "peach", quantity: 29 },
        { model: "Product 23", price: 1100, color: "plum", quantity: 4 },
        { model: "Product 24", price: 1200, color: "chocolate", quantity: 15 },
        { model: "Product 25", price: 1300, color: "khaki", quantity: 10 },
        { model: "Product 26", price: 1400, color: "indigo", quantity: 20 },
        { model: "Product 27", price: 1500, color: "violet", quantity: 12 },
        { model: "Product 28", price: 1600, color: "aqua", quantity: 18 },
        { model: "Product 29", price: 1700, color: "fuchsia", quantity: 25 },
        { model: "Product 30", price: 1800, color: "limegreen", quantity: 5 },
        { model: "Product 31", price: 1900, color: "darkorange", quantity: 22 },
        { model: "Product 32", price: 2000, color: "darkviolet", quantity: 30 },
        { model: "Product 33", price: 2100, color: "darkred", quantity: 8 },
        { model: "Product 34", price: 2200, color: "darkgreen", quantity: 14 },
        { model: "Product 35", price: 2300, color: "darkblue", quantity: 19 },
        { model: "Product 36", price: 2400, color: "darkcyan", quantity: 11 },
        { model: "Product 37", price: 2500, color: "darkmagenta", quantity: 16 },
        { model: "Product 38", price: 2600, color: "darkkhaki", quantity: 9 },
        { model: "Product 39", price: 2700, color: "darkslateblue", quantity: 27 },
        { model: "Product 40", price: 2800, color: "darkslategray", quantity: 13 },
        { model: "Product 41", price: 2900, color: "darkseagreen", quantity: 21 },
        { model: "Product 42", price: 3000, color: "darkorchid", quantity: 17 },
        { model: "Product 43", price: 3100, color: "darkgoldenrod", quantity: 23 },
        { model: "Product 44", price: 3200, color: "darkturquoise", quantity: 6 },
        { model: "Product 45", price: 3300, color: "darkslateblue", quantity: 29 },
        { model: "Product 46", price: 3400, color: "lightcoral", quantity: 4 },
        { model: "Product 47", price: 3500, color: "lightpink", quantity: 15 },
        { model: "Product 48", price: 3600, color: "lightyellow", quantity: 10 },
        { model: "Product 49", price: 3700, color: "lightgreen", quantity: 20 },
        { model: "Product 50", price: 3800, color: "lightblue", quantity: 12 },
        { model: "Product 51", price: 3900, color: "lightgray", quantity: 18 },
        { model: "Product 52", price: 4000, color: "lightcyan", quantity: 25 },
        { model: "Product 53", price: 4100, color: "lightgoldenrodyellow", quantity: 5 },
        { model: "Product 54", price: 4200, color: "lightseagreen", quantity: 22 },
        { model: "Product 55", price: 4300, color: "lightsteelblue", quantity: 30 },
        { model: "Product 56", price: 4400, color: "lightyellow", quantity: 8 },
        { model: "Product 57", price: 4500, color: "lightsalmon", quantity: 14 },
        { model: "Product 58", price: 4600, color: "lightpink", quantity: 19 },
        { model: "Product 59", price: 4700, color: "lightblue", quantity: 11 },
        { model: "Product 60", price: 4800, color: "lightgreen", quantity: 16 },
        { model: "Product 61", price: 4900, color: "lightgray", quantity: 9 },
        { model: "Product 62", price: 5000, color: "lightcoral", quantity: 27 },
        { model: "Product 63", price: 5100, color: "lightcyan", quantity: 13 },
        { model: "Product 64", price: 5200, color: "lightgoldenrodyellow", quantity: 21 },
        { model: "Product 65", price: 5300, color: "lightseagreen", quantity: 17 },
        { model: "Product 66", price: 5400, color: "lightsteelblue", quantity: 23 },
        { model: "Product 67", price: 5500, color: "lightyellow", quantity: 6 },
        { model: "Product 68", price: 5600, color: "lightsalmon", quantity: 29 },
        { model: "Product 69", price: 5700, color: "lightpink", quantity: 4 },
        { model: "Product 70", price: 5800, color: "lightblue", quantity: 15 },
        { model: "Product 71", price: 5900, color: "lightgreen", quantity: 10 },
        { model: "Product 72", price: 6000, color: "lightgray", quantity: 20 },
        { model: "Product 73", price: 6100, color: "lightcoral", quantity: 12 },
        { model: "Product 74", price: 6200, color: "lightcyan", quantity: 18 },
        { model: "Product 75", price: 6300, color: "lightgoldenrodyellow", quantity: 25 },
        { model: "Product 76", price: 6400, color: "lightseagreen", quantity: 5 },
        { model: "Product 77", price: 6500, color: "lightsteelblue", quantity: 22 },
        { model: "Product 78", price: 6600, color: "lightyellow", quantity: 30 },
        { model: "Product 79", price: 6700, color: "lightsalmon", quantity: 8 },
        { model: "Product 80", price: 6800, color: "lightpink", quantity: 14 },
        { model: "Product 81", price: 6900, color: "lightblue", quantity: 19 },
        { model: "Product 82", price: 7000, color: "lightgreen", quantity: 11 },
        { model: "Product 83", price: 7100, color: "lightgray", quantity: 16 },
        { model: "Product 84", price: 7200, color: "lightcoral", quantity: 9 },
        { model: "Product 85", price: 7300, color: "lightcyan", quantity: 27 },
        { model: "Product 86", price: 7400, color: "lightgoldenrodyellow", quantity: 13 },
        { model: "Product 87", price: 7500, color: "lightseagreen", quantity: 21 },
        { model: "Product 88", price: 7600, color: "lightsteelblue", quantity: 17 },
        { model: "Product 89", price: 7700, color: "lightyellow", quantity: 23 },
        { model: "Product 90", price: 7800, color: "lightsalmon", quantity: 6 },
        { model: "Product 91", price: 7900, color: "lightpink", quantity: 29 },
        { model: "Product 92", price: 8000, color: "lightblue", quantity: 4 },
        { model: "Product 93", price: 8100, color: "lightgreen", quantity: 15 },
        { model: "Product 94", price: 8200, color: "lightgray", quantity: 10 },
        { model: "Product 95", price: 8300, color: "lightcoral", quantity: 20 },
        { model: "Product 96", price: 8400, color: "lightcyan", quantity: 12 },
        { model: "Product 97", price: 8500, color: "lightgoldenrodyellow", quantity: 18 },
        { model: "Product 98", price: 8600, color: "lightseagreen", quantity: 25 },
        { model: "Product 99", price: 8700, color: "lightsteelblue", quantity: 5 },
        { model: "Product 100", price: 8800, color: "lightyellow", quantity: 22 },
        { model: "Product 101", price: 8900, color: "lightsalmon", quantity: 30 },
        { model: "Product 102", price: 9000, color: "lightpink", quantity: 8 },
        { model: "Product 103", price: 9100, color: "lightblue", quantity: 14 },
        { model: "Product 104", price: 9200, color: "lightgreen", quantity: 19 },
        { model: "Product 105", price: 9300, color: "lightgray", quantity: 11 },
        { model: "Product 106", price: 9400, color: "lightcoral", quantity: 16 },
        { model: "Product 107", price: 9500, color: "lightcyan", quantity: 9 },
        { model: "Product 108", price: 9600, color: "lightgoldenrodyellow", quantity: 27 },
        { model: "Product 109", price: 9700, color: "lightseagreen", quantity: 13 },
        { model: "Product 110", price: 9800, color: "lightsteelblue", quantity: 21 },
        { model: "Product 111", price: 9900, color: "lightyellow", quantity: 17 },
        { model: "Product 112", price: 10000, color: "lightsalmon", quantity: 23 },
        { model: "Product 113", price: 10100, color: "lightpink", quantity: 6 },
        { model: "Product 114", price: 10200, color: "lightblue", quantity: 29 },
        { model: "Product 115", price: 10300, color: "lightgreen", quantity: 4 },
        { model: "Product 116", price: 10400, color: "lightgray", quantity: 15 },
        { model: "Product 117", price: 10500, color: "lightcoral", quantity: 10 },
        { model: "Product 118", price: 10600, color: "lightcyan", quantity: 20 },
        { model: "Product 119", price: 10700, color: "lightgoldenrodyellow", quantity: 12 },
        { model: "Product 120", price: 10800, color: "lightseagreen", quantity: 18 },
        { model: "Product 121", price: 10900, color: "lightsteelblue", quantity: 25 },
        { model: "Product 122", price: 11000, color: "lightyellow", quantity: 5 },
        { model: "Product 123", price: 11100, color: "lightsalmon", quantity: 22 },
        { model: "Product 124", price: 11200, color: "lightpink", quantity: 30 },
        { model: "Product 125", price: 11300, color: "lightblue", quantity: 8 },
        { model: "Product 126", price: 11400, color: "lightgreen", quantity: 14 },
        { model: "Product 127", price: 11500, color: "lightgray", quantity: 19 },
        { model: "Product 128", price: 11600, color: "lightcoral", quantity: 11 },
        { model: "Product 129", price: 11700, color: "lightcyan", quantity: 16 },
        { model: "Product 130", price: 11800, color: "lightgoldenrodyellow", quantity: 9 },
        { model: "Product 131", price: 11900, color: "lightseagreen", quantity: 27 },
        { model: "Product 132", price: 12000, color: "lightsteelblue", quantity: 13 },
        { model: "Product 133", price: 12100, color: "lightyellow", quantity: 21 },
        { model: "Product 134", price: 12200, color: "lightsalmon", quantity: 17 },
        { model: "Product 135", price: 12300, color: "lightpink", quantity: 23 },
        { model: "Product 136", price: 12400, color: "lightblue", quantity: 6 },
        { model: "Product 137", price: 12500, color: "lightgreen", quantity: 29 },
        { model: "Product 138", price: 12600, color: "lightgray", quantity: 4 },
        { model: "Product 139", price: 12700, color: "lightcoral", quantity: 15 },
        { model: "Product 140", price: 12800, color: "lightcyan", quantity: 10 },
        { model: "Product 141", price: 12900, color: "lightgoldenrodyellow", quantity: 20 },
        { model: "Product 142", price: 13000, color: "lightseagreen", quantity: 12 },
        { model: "Product 143", price: 13100, color: "lightsteelblue", quantity: 18 },
        { model: "Product 144", price: 13200, color: "lightyellow", quantity: 25 },
        { model: "Product 145", price: 13300, color: "lightsalmon", quantity: 5 },
        { model: "Product 146", price: 13400, color: "lightpink", quantity: 22 },
        { model: "Product 147", price: 13500, color: "lightblue", quantity: 30 },
        { model: "Product 148", price: 13600, color: "lightgreen", quantity: 8 },
        { model: "Product 149", price: 13700, color: "lightgray", quantity: 14 },
        { model: "Product 150", price: 13800, color: "lightcoral", quantity: 19 },
        { model: "Product 151", price: 13900, color: "lightcyan", quantity: 11 },
        { model: "Product 152", price: 14000, color: "lightgoldenrodyellow", quantity: 16 },
        { model: "Product 153", price: 14100, color: "lightseagreen", quantity: 9 },
        { model: "Product 154", price: 14200, color: "lightsteelblue", quantity: 27 },
        { model: "Product 155", price: 14300, color: "lightyellow", quantity: 13 },
        { model: "Product 156", price: 14400, color: "lightsalmon", quantity: 21 },
        { model: "Product 157", price: 14500, color: "lightpink", quantity: 17 },
        { model: "Product 158", price: 14600, color: "lightblue", quantity: 23 },
        { model: "Product 159", price: 14700, color: "lightgreen", quantity: 6 },
        { model: "Product 160", price: 14800, color: "lightgray", quantity: 29 },
        { model: "Product 161", price: 14900, color: "lightcoral", quantity: 4 },
        { model: "Product 162", price: 15000, color: "lightcyan", quantity: 15 },
        { model: "Product 163", price: 15100, color: "lightgoldenrodyellow", quantity: 10 },
        { model: "Product 164", price: 15200, color: "lightseagreen", quantity: 20 },
        { model: "Product 165", price: 15300, color: "lightsteelblue", quantity: 12 },
        { model: "Product 166", price: 15400, color: "lightyellow", quantity: 18 },
        { model: "Product 167", price: 15500, color: "lightsalmon", quantity: 25 },
        { model: "Product 168", price: 15600, color: "lightpink", quantity: 5 },
        { model: "Product 169", price: 15700, color: "lightblue", quantity: 22 },
        { model: "Product 170", price: 15800, color: "lightgreen", quantity: 30 },
        { model: "Product 171", price: 15900, color: "lightgray", quantity: 8 },
        { model: "Product 172", price: 16000, color: "lightcoral", quantity: 14 },
        { model: "Product 173", price: 16100, color: "lightcyan", quantity: 19 },
        { model: "Product 174", price: 16200, color: "lightgoldenrodyellow", quantity: 11 },
        { model: "Product 175", price: 16300, color: "lightseagreen", quantity: 16 },
        { model: "Product 176", price: 16400, color: "lightsteelblue", quantity: 9 },
        { model: "Product 177", price: 16500, color: "lightyellow", quantity: 27 },
        { model: "Product 178", price: 16600, color: "lightsalmon", quantity: 13 },
        { model: "Product 179", price: 16700, color: "lightpink", quantity: 21 },
        { model: "Product 180", price: 16800, color: "lightblue", quantity: 17 },
        { model: "Product 181", price: 16900, color: "lightgreen", quantity: 23 },
        { model: "Product 182", price: 17000, color: "lightgray", quantity: 6 },
        { model: "Product 183", price: 17100, color: "lightcoral", quantity: 29 },
        { model: "Product 184", price: 17200, color: "lightcyan", quantity: 4 },
        { model: "Product 185", price: 17300, color: "lightgoldenrodyellow", quantity: 15 },
        { model: "Product 186", price: 17400, color: "lightseagreen", quantity: 10 },
        { model: "Product 187", price: 17500, color: "lightsteelblue", quantity: 20 },
        { model: "Product 188", price: 17600, color: "lightyellow", quantity: 12 },
        { model: "Product 189", price: 17700, color: "lightsalmon", quantity: 18 },
        { model: "Product 190", price: 17800, color: "lightpink", quantity: 25 },
        { model: "Product 191", price: 17900, color: "lightblue", quantity: 5 },
        { model: "Product 192", price: 18000, color: "lightgreen", quantity: 22 },
        { model: "Product 193", price: 18100, color: "lightgray", quantity: 30 },
        { model: "Product 194", price: 18200, color: "lightcoral", quantity: 8 },
        { model: "Product 195", price: 18300, color: "lightcyan", quantity: 14 },
        { model: "Product 196", price: 18400, color: "lightgoldenrodyellow", quantity: 19 },
        { model: "Product 197", price: 18500, color: "lightseagreen", quantity: 11 },
        { model: "Product 198", price: 18600, color: "lightsteelblue", quantity: 16 },
        { model: "Product 199", price: 18700, color: "lightyellow", quantity: 9 },
        { model: "Product 200", price: 18800, color: "lightsalmon", quantity: 27 }
    ];
  

products.forEach(function(ani){

   let a = ani.quantity
 if(a>12){
    console.log(ani);
    
    
    
 }

})
