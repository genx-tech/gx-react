# @genx/react

Gen-X React Library (React & React Native)

## Installation

```sh
npm install @genx/react
```

## Usage

```js
import { useAsyncMemo } from '@genx/react;

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

_May use eslint comment to disable warning or error you 100% sure that's correct and reasonable_

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
