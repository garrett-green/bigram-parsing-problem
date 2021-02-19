# The Bigram Parsing Problem
--- 
A solution to the the Bigram Parsing Problem.

### Prompt
View _The BIg Gram Parsing Problem_ Prompt: [`assets/prompt.pdf`](https://github.com/garrett-green/bigram-parsing-problem/blob/main/assets/prompt.pdf)

## Installation
1. Download the repo (via one of the options below)
    - `git clone https://github.com/garrett-green/bigram-parsing-problem.git`
    - [Download the .zip file](https://github.com/garrett-green/bigram-parsing-problem/archive/main.zip)
2. `cd bigram-parsing-problem`
3. `yarn`

## Run Multiple Examples Of The App
- `yarn all`
  - This analyzes four different example files in the `textFiles` folder.

## Analyze Local Text File
- `yarn histogram /full/path/to/file.txt`
  - Note: File must be `.txt` type and the full file path must be provided

## Testing
- Run all tests
  - `yarn test`
- Generate and view coverage report
  - `yarn test-report`
  - The coverage report will print to the terminal. Additionally, an interactive coverage report should open in the browser - if not, visit `file://{path-to-this-repo}/coverage/lcov-report/index.html`.

### Testing Coverage Report Snapshot
![Testing Coverage Report](https://github.com/garrett-green/bigram-parsing-problem/blob/main/assets/testing-coverage-report.png "Testing Coverage Report")


## Additional Scripts
- Linting
  - `yarn lint`
    - To autofix eligible lint error/warnings: `yarn lint --fix`

--- 

#### Usage/Requirements
Node 10+.

#### License
[MIT](https://choosealicense.com/licenses/mit/)
