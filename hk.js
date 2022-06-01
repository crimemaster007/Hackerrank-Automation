const puppeteer = require("puppeteer");
const codeObj = require("./codes");
const loginLink = "https://www.hackerrank.com/auth/login";
const email = "tusharkunar430@gmail.com";
const password = "tushar@123";

let page;


(async function () {
    try {
        const browserInstance = await puppeteer.launch({
            headless: false,
            args: ["--start-maximized"],
            defaultViewport: null
        });

        let newTab = await browserInstance.newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[id='input-1']", email, { delay: 50 });
        await newTab.type("input[type='password']", password, { delay: 50 });
        await newTab.click("button[data-analytics='LoginPassword']", { delay: 50 });
        await waitAndClick(".topic-card a[data-attr1='algorithms']", newTab);
        await waitAndClick('input[value="warmup"]', newTab);
        let questionsArr = await newTab.$$('.challenge-submit-btn', { delay: 50 });
        // console.log(challengePromise.length);
        return questionWillBeSolved = questionSolver(newTab, questionsArr[0], codeObj.answers[0]);

    }
    catch (error) {
        console.log(error);
    }
})();







// browserOpen.then(function (browserObj) {
//     console.log("browser openend");
//     let browserOpenPromise = browserObj.newPage();
//     return browserOpenPromise;
// }).then(function (newTab) {
//     page = newTab;
//     let hackerrankOpenPromise = newTab.goto(loginLink, { timeout: 0 });
//     return hackerrankOpenPromise;
// }).then(function () {
//     let emailIsEntered = page.type("input[id='input-1']", email, { delay: 50 });
//     return emailIsEntered;
// }).then(function () {
//     let passwordIsEntered = page.type("input[type='password']", password, { delay: 50 });
//     return passwordIsEntered;
// }).then(function () {
//     let loginButtonClicked = page.click("button[data-analytics='LoginPassword']", { delay: 50 });
//     return loginButtonClicked;
// }).then(function () {
//     let clickOnAlgoPromise = waitAndClick(".topic-card a[data-attr1='algorithms']", page);
//     return clickOnAlgoPromise;
// }).then(function () {
//     let getToWarmUp = waitAndClick('input[value="warmup"]', page);
//     return getToWarmUp;
// }).then(function () {
//     let waitFor4Secs = page.waitFor(4000);
//     return waitFor4Secs;
// }).then(function () {
//     let challengePromise = page.$$('.challenge-submit-btn', { delay: 50 });
//     return challengePromise;
// }).then(function (questionArr) {
//     // console.log("no of questions", questionArr.length);
//     let questionWillBeSolved = questionSolver(page, questionArr[0], codeObj.answers[0]);
//     return questionWillBeSolved;
// })


async function waitAndClick(selector, cPage) {
    try{
        await cPage.waitForSelector(selector);
        let selectorClicked = await cPage.click(selector);
        return selectorClicked;
    }
    catch (err) {
        return err;
    }
}





// function waitAndClick(selector, cPage) {
//     return new Promise(function (resolve, reject) {
//         let waitForModelPromise = cPage.waitForSelector(selector);
//         waitForModelPromise.then(function () {
//             let clickModel = cPage.click(selector);
//             return clickModel;
//         }).then(function () {
//             resolve();
//         }).catch(function (err) {
//             reject();
//         })
//     })

// }

async function questionSolver(page, question, answer) {
    try {
        await question.click();
        await waitAndClick('.monaco-editor.no-user-select.vs', page);
        await waitAndClick('.checkbox-input', page);
        await page.waitForSelector('textarea.custominput', page);
        await page.type("textarea.custominput", answer, { delay: 10 });
        await page.keyboard.down("Control");
        await page.keyboard.press("A", { delay: 100 });
        await page.keyboard.press("X", { delay: 100 });
        await page.keyboard.up("Control");
        await waitAndClick('.monaco-editor.no-user-select.vs', page);
        await page.keyboard.down("Control");
        await page.keyboard.press("A", { delay: 100 });
        await page.keyboard.press("V", { delay: 100 });
        await page.keyboard.up("Control");
        await page.click(".hr-monaco__run-code", { delay: 50 });
    }
    catch (err) {
        console.log(err);
    }
}


// function questionSolver(page, question, answer) {
//     return new Promise(function (resolve, reject) {
//         let questionedWillBeClicked = question.click();
//         questionedWillBeClicked.then(function () {
//             let editorInFocusPromise = waitAndClcik('.monaco-editor.no-user-select.vs', page);
//             return editorInFocusPromise;
//         }).then(function () {
//             return waitAndClcik('.checkbox-input', page)
//         }).then(function () {
//             return page.waitForSelector('textarea.custominput', page)
//         }).then(function () {
//             return page.type("textarea.custominput", answer, { delay: 10 });
//         }).then(function () {
//             let ctrlIsPressed = page.keyboard.down("Control");
//             return ctrlIsPressed;
//         }).then(function () {
//             let AisPressed = page.keyboard.press("A", { delay: 100 });
//             return AisPressed;
//         }).then(function () {
//             let XisPressed = page.keyboard.press("X", { delay: 100 });
//             return XisPressed;
//         }).then(function () {
//             let ctrlIsUnPressed = page.keyboard.up("Control");
//             return ctrlIsUnPressed;
//         }).then(function () {
//             let mainEditorInFocus = waitAndClcik('.monaco-editor.no-user-select.vs', page);
//             return mainEditorInFocus;
//         }).then(function () {
//             let ctrlIsPressed = page.keyboard.down("Control");
//             return ctrlIsPressed;
//         }).then(function () {
//             let AisPressed = page.keyboard.press("A", { delay: 100 });
//             return AisPressed;
//         }).then(function () {
//             let VisPressed = page.keyboard.press("V", { delay: 100 });
//             return VisPressed;
//         }).then(function () {
//             let ctrlIsUnPressed = page.keyboard.up("Control");
//             return ctrlIsUnPressed;
//         }).then(function () {
//             return page.click(".hr-monaco__run-code", { delay: 50 });
//         }).then(function () {
//             resolve();
//         }).catch(function (err) {
//             reject();
//         })
//     })
// }