BIN = ./node_modules/.bin

.PHONY: main
main: lint test

.PHONY: test
test:
	@NODE_ENV=test $(BIN)/mocha --ui bdd --reporter spec ./test

.PHONY: lib-cov
lib-cov: clean-coverage
	$(BIN)/istanbul instrument --output lib-cov --no-compact --variable global.__coverage__ lib

.PHONY: coverage
coverage: lib-cov
	COVER=1 $(BIN)/mocha --reporter mocha-istanbul
	@echo
	@echo Open html-report/index.html file in your browser

.PHONY: lint
lint:
	$(BIN)/jshint ./lib

.PHONY: clean
clean: clean-coverage

.PHONY: clean-coverage
clean-coverage:
	-rm -rf lib-cov
	-rm -rf html-report
