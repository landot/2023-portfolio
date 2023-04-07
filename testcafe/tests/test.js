import { ClientFunction, Selector } from "testcafe";

const getURL = ClientFunction(() => window.location.href);

fixture (`A set of examples that illustrate how to use TestCafe API`).page(`http://localhost:3000/`);

test('clicking learn react loads react.dev', async t => {
    await t
        .click(Selector("[data-testid='learn-react-link']"))
        .expect(getURL()).eql('https://react.dev/');
    await t.debug()
});