# @genx/react

Gen-X React Library (React & React Native)

## Installation

```sh
npm install @genx/react
```

## Usage

```js
import { useAsyncMemo } from '@genx/react/hooks;

// function component
function (props) {
    const { loading, value, error } = useAsyncMemo(async () => {
        // do async code

        return {...}; // as value
    }, [...deps]); // deps change will trigger re-invoke of the above function

    if (loading) {
        ...
    }

    //do someting with value
}
```

## Components

-   hoc
    -   **inject** - Inject object as predefined props into a component
    -   **renderLazy** - Render a component with React.lazy and dynamic import (requires project to update the localized import method into Runtime)
    -   **withObserver** - inject + observer
    -   **withOnLocationChange** - Inject an onLocationChange prop and listen to react-router's history.listen
    -   **withStyles** - Inject a useStyles method into a component, which returns the built styles object passed in withStyles (The reason to inject useStyles instead of the built styles object is for compatible with all popular styling system, e.g. mui, bootstrap)
    -   **withSuspense** - Wrap the component with Suspense and default fallback
-   hooks
    -   **useAsyncCallback** - Async version of useCallback, but returns { loading, value, error }
    -   **useAsyncMemo** - Async version of useMemo, but returns { loading, value, error }
    -   **useAsyncProgress** - useAsyncMemo + progress report, just keep in mind that when progress advances, the component using this hook will also be re-rendered
    -   **useDeepDeps** - For use object-like param as the dependencies of hooks
    -
-

## Developer code

### Coding style

-   Auto-format by prettier

```
npm run prettier
```

-   Check warning and errors

```
npm run lint
```

-   Ensure no lint errors before committing source code

_"commit-hook" has been set to automatically check lint errors_

-   Exceptions

_May use eslint comment to disable warning or error if you 100% sure that's correct and reasonable_

Block commment

```
/* eslint-disable react-hooks/exhaustive-deps */
deps
/* eslint-enable react-hooks/exhaustive-deps */
```

Inline comment

```
pluginState.libraryTranspiledMark[path] = true; // eslint-disable-line
```

### Commit message

[Commit message convention](https://github.com/conventional-changelog/commitlint#readme)

-   Syntax

```
type(scope?): subject
#scope is optional; multiple scopes are supported (current delimiter options: "/", "\" and ",")
```

-   Types

```
build, ci, chore, docs, feat, fix, perf, refactor, revert, style, test
```

-   Subject
    All lower case words without ending full-stop (全小写，不要结尾句话)

-   Example

```
   fix(server): send cors headers

   refactor: common lib
```

## License

MIT
