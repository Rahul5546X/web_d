### setting up tailwind
###


```
npm init -y
npm install -D tailwindcss(-D  se as a dev dependency download hota h)
npx tailwindcss init (ek file mil jayegi taiwind.config.js name se)
```

```
check the content folder very well
```

```
make a folder names src with a file named input.css inside the folder
```


```
@tailwind base;
@tailwind components;
@tailwind utilities;
 include these inside the input.css
```

```
run this command
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

make sure the folder named src is outside(YKWIM)
```

```
do this inside the file tailwind.config.js
content: ["*.{html}"],
```

```
then include the output.css file in your html

```