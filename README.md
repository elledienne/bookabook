# Please READ ME
##### Just some notes for you to better understand my work

Here is the result of my hard work.

![Screenshot](https://raw.githubusercontent.com/elledienne/bookabook/master/website.png)

As you will see it's not 100% complete, unfortunately my free time is not a lot, and as you can see looking at the time of this commit, I've tried my best.

So what is unfinished/unpolished?

- The calendar (picker) is unstyled
- The navigation can be broken (Actually, the navigation works well, it's just that it needs some small fixes. For example: right now it's possible to load the second part of the form simply going to the correct URL. Of course this is not ideal, the user should be sent to the first part, no matter what. But it's not an hard fix, I'm sure you can believe me that, with more time, I would fix it pretty easily).
- The section that let the user select the 'individual price offer' is missing. Again, it's just a matter of time, I'm sure you know i can do that too.
- Probably something else.

#### Things I'd like to say
As you will see, I've tried to make the Angular code as flexible as possible. That means that the form can be changed without breaking the JS code. In particolar I want to stress that adding/removing one or more page/s doesn't force to touch the JS code, the app will adapt automatically.
In order to do that I've created two objects in the FormFactory:

- ```formSetup``` - Think about this variable as some data that we fetch from the server in order to configurate the form without changing the JS logic.
- ```formData``` - And object that represent/store the form data

> If you keep pressing next, so if you try to go to the third page of the form (that doesn't exist), I'll alert the ´formData´
content

Another thing that I want to underline is that if the user click the back button of the browser, the browser will goes to the previous form part (if any). I saw that your website it's not doing it. Yes, I'm showing off (Just kidding, it's 4.45 in the morining, forgive me)

#### Launch the website (?!?)
What I do is using the Python HTTPSimpleServer

```python -m SimpleHTTPServer 8000```

##### Thanks :)
