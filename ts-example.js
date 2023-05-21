function isAdult(user) {
    return user.age >= 18;
}
var bob = {
    name: "Bob",
    age: 20,
};
var isBobAdult = isAdult(bob, "test");
