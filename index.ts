function Validate(success:Function, failure:Function): Function
{
    let password:string = "abc";
    if(password==="abc"){
        return success();
    } else {
        return failure();
    }
}
Validate(function(){console.log(`Success`)}, function(){ console.log(`Invalid`)})();