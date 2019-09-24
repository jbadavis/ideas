# Idea Board

## Approach

The application's state is managed from a single stateful component `App`, which passes event handlers down to child components and centreally manages the list of ideas.

Stateless, functional components are utilised as much as possible for ease of testing.

A second stateful component, `AddForm`, is also utilised to manage field values and the description character counter. This particular component could be easily migrated to hooks.

Application state is persisted using local storage. This is updated using the `componentDidUpdate` lifecycle method.

## Setup

### Code Sandbox 

The application can be viewed in CodeSandbox using the link below:

[CodeSandbox](https://codesandbox.io/s/github/jbadavis/ideas)

### Locally

Install the application:

```
npm install
```

Run it:

```
npm start
```
