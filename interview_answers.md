# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Nowadays functional components can have state, but the difference between a pure
functional component and a stateful component is that a pure component outputs
the same thing every time while a stateful component outputs differently based
on it's state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount is called before the component mounts or renders.
componentWillUpdate runs before the component updates or rerenders.

3. Define stateful logic.

Whenever you have logic that changes the state, you have stateful logic. We can
use state with logic without it being stateful logic for example `{showing &&
<Element/>}`, while `<Element onClick={() => setShowing(true)}` contains
stateful logic.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange!
Act!
Assert!
In the arrange step you set up your testing conditions.
In the act step you make the change you want to test for.
In the assert step you check that your change did the thing you wanted.
