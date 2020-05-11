# Toy Robot

### Code Design

This program is written in **Typescript**.

#### Robot

A robot can have two types of status, defined as types **OnTable** and **OutOfTable**.

Type `OnTable` represents the robot status which is on the table with its x, y positions, and direction.

```
type OnTable = {
  kind: 'OnTable';
  x: DimensionX;
  y: DimensionY;
  direction: Direction;
};
```

Type `OutOfTable` represents the robot status which is off the table, before a valid place command.
```
type OutOfTable = {
  kind: 'OutOfTable';
};
```

#### Actions & Handlers

Actions are defined as types **Place**, **Move**, **Left**, **Right**, **Report**.

Only the `Place` action deals with both robot status `OnTable` and `OutOfTable`.

The rest of the actions only handle `OnTable` status.

Action handlers are declared in `robot/handlers` folder.

#### Table

Table is defined as a class **Table**, with type alias **DimensionX** and **DimensionY**.

```
type DimensionX = number;
type DimensionY = number;
```

#### Directions

Directions are defined as types **North**, **South**, **West**, **East**.

#### Files Overview

```
src/
-- index.ts            // main entry file
-- actions/            // action types
-- robot/              // robot status and action handlers
-- table/              // table type
-- directions/         // direction types
-- utils/              // util functions

test/
-- e2e.spec.ts         // e2e tests
```

### Run Unit Tests

- Run `yarn` to install dependencies.
- Run `yarn test` for unit testing.

*Note: Unit test files are in `src` folder and named as `.spec.ts` next to the target file.*

##### Run unit tests with docker

- `docker build -t robot .`
- `docker run -it robot test`

### Run E2E Tests

- Run `yarn` to install dependencies
- Run `brew install grep` to instal **grep** command on Mac
- Run `yarn test:e2e` to run e2e tests

##### Run e2e tests with docker

- `docker build -t robot .`
- `docker run -it robot test:e2e`

### Run Program

- Run `yarn` to install dependencies.
- Run `yarn start ./your-commands-file`.

e.g. `yarn start ./test/fixtures/example-a` -> `Output: 0,1,NORTH`
