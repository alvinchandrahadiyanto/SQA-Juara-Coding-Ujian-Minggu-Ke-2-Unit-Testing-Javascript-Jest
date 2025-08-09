class Calculator{
    static add (a,b){
        return a+b;
    }

    static subtract(a,b){
        return a-b;
    }

    static multiplication(a,b){
        return a*b;
    }

    static modulo(a,b){
        return a%b;
    }

    static divided(a,b){
        result=a/b;
        result=parseFloat(result.toFixed(2));
        return result;
    }

    static bmi(tinggi_meter,berat_kg){
        result = berat_kg/(tinggi_meter * tinggi_meter);
        result=parseFloat(result.toFixed(2));
        return result;
    }
}

module.exports = { Calculator };