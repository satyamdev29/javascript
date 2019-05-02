
function appendToString(a,b){
    return console.log(a+b)
}


appendToString("Hello", " World!"); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"