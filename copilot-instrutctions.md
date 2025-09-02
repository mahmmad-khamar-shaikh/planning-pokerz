# Copilot Instructions for Angular Project (TypeScript, RxJS, NgRx)

## Project Overview

- This is an enterprise-scale Angular application written in TypeScript.
- State management is implemented using NgRx Store and Effects.
- Reactive programming patterns use RxJS observables for asynchronous operations.

## Coding Guidelines

- Use Angular CLI for scaffolding modules, components, and services (`ng generate` commands).
- Strictly prefer TypeScript features (interfaces, generics, access modifiers).
- Use RxJS for all asynchronous and event-based tasks (e.g., HTTP calls, timers).
- Prefer immutable state updates in NgRx reducers; always return new state objects.
- Use Angular Dependency Injection for all services.
- Always provide type annotations for function return types and variables.

## NgRx Usage

- Most business logic flows through NgRx actions, reducers, selectors, and effects.
- Place NgRx files in associated feature directories; each feature has its own state management files.
- Side-effects go in Effects classes and use RxJS operators like `switchMap`, `mergeMap`, `catchError`.
- Select state slices using selectors from `@ngrx/store` in components.

## RxJS Usage

- Compose operators using the `.pipe()` syntax; never chain calls directly.
- Prefer `Observable` over `Promise`.
- Subscribe in components only; use `async` pipe in templates where possible.
- Unsubscribe from subscriptions in `ngOnDestroy` or use takeUntil patterns for long-lived observables.

## Test and Validation

- Run all tests using `ng test` and lint with `ng lint` before submitting pull requests.
- Use Jasmine and Karma for unit testing; test NgRx effects, reducers, and components.
- Write tests covering edge cases for selectors, reducers, and RxJS streams.

## Build Instructions

- Always `npm install` before building.
- Use `ng build` for production builds; check for strict type errors.
- Preferred Node.js version: 18.x, Angular version: 16.x, NgRx version: 16.x.

## Architectural Notes

- Main source folder: `/src/app/`
- Global state: `/src/app/store/`
- Feature modules: `/src/app/features/<feature-name>/`
- Shared abstractions: `/src/app/shared/`

## Best Practices

- Use `OnPush` change detection strategy for components unless required otherwise.
- Avoid any logic in Angular templates other than displaying data and calling simple methods.
- Document complex RxJS stream logic inline, especially in effects.

## Exclusions

- Do not use deprecated RxJS APIs.
- Avoid external mutation of component state.

## Javacript Best Practices
1. Prefer map over forEach for Array Transformations
When transforming an array to produce a new array, use map. Only use forEach for iterating without collecting results.
```javascript
// Good: Use map for transformations.
const numbers = [1, 2, 3];
const squares = numbers.map(n => n * n); // [1, 4, 9]

// Avoid: Using forEach for transformations.
const squares = [];
numbers.forEach(n => squares.push(n * n));
```
2. Use filter to Select Subsets
Use filter to create a new array with only the elements that pass a condition.
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

```
3. Prefer const and let Over var
Always declare variables with const (preferably) or let. Avoid var.
```javascript
// Good
const pi = 3.14;
let counter = 0;

// Avoid
var count = 10;
```
4. Use Arrow Functions for Callbacks
Use concise arrow function syntax for short callback functions.

```javascript
// Good
numbers.map(n => n * 2);

// Avoid
numbers.map(function(n) { return n * 2; });
```
5. Prefer Template Literals Over String Concatenation
Use backtick (`) template literals instead of concatenating with +.
```javscript
// Good
const name = "Alice";
const msg = `Hello, ${name}!`;

// Avoid
const msg = "Hello, " + name + "!";
```