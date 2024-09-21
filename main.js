function limitNumberFrequency(list, N) {
    const count = {};
    const result = [];


    
    for (const num of list) {
        // اگر عدد هنوز در شیء وجود ندارد، مقدار آن را 0 می‌گذاریم
        if (!count[num]) {
            count[num] = 0;
        }
        
        // اگر تعداد تکرار کمتر از N است، عدد را به لیست نتیجه اضافه می‌کنیم
        if (count[num] < N) {
            result.push(num);
            count[num]++;
        }
    }

    return result;
}

// تست تابع
console.log(limitNumberFrequency([1, 2, 3, 1, 2, 1, 2, 3], 2)); // خروجی: [1, 2, 3, 1, 2, 3]
console.log(limitNumberFrequency([20, 37, 20, 21], 1)); // خروجی: [20, 37, 21]