# Cancellable Action Button

The Cancellable Action Button is a React component available to use in any React projects. Its purpose is to allow a user to cancel an action they've just initiated for a short amount of time, before the action is carried out.

It serves a similar purpose to an "Are You Sure?" confirmation dialog after a user initiates an action, but with a different execution.

## Props

| Prop              | Type       | Description | Default |
|-------------------|------------|-------------|---------|
| `actionText`      | _string_   | The label of the button when the user can initiate the action | `Send Important File` |
| `cancelText`      | _string_   | The label of the button when the user can cancel the initiated action | `Cancel Sending` |
| `timeout`         | _number_   | The amount of time in ms the user can cancel the initiated action | `5000` |
| `onClick`         | _Function_ | The action of the button. | - |
