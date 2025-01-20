function Validate(success, failure) {
    var password = "abc";
    if (password === "abc") {
        return success();
    }
    else {
        return failure();
    }
}
Validate(function () { console.log("Success"); }, function () { console.log("Invalid"); })();
