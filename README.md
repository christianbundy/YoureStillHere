You're Still Here 1.1.1
=======================

Time-consuming websites suck. This Chrome extension will remind you every once in a while that you're *still* on a time-consuming website with a quick and simple dialog reminding you that **"You're still here"**.

Instead of trying to outsmart yourself with programs and network configs, excercise your self-discipline with a little extra nudge.

This extension uses a [fork](https://github.com/ChristianBundy/jquery-notification) of code originally written by [Claviska](https://github.com/claviska) from 2011 dual licensed under the MIT / GPLv2 licenses.

How To Use
----------

All changes are done in the Javascript console (Ctrl+Shift+J).

To turn on YSH, just go to the website you'd like to enable and set `ysh_time`.

```localStorage.setItem('ysh_time', 30);
    ```
    
To change the message for this website, just set `ysh_message`.

```localStorage.setItem('ysh_message', 'You\'re still here');
    ```
