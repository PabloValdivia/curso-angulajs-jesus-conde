function suma(a, b) {
    return a + b;
}

function multiplica(a, b) {
	var result = 0;
	for (i = 0; i < a; ++i) {
        result = suma(result, b);
	}
	return result;
}