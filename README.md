# jquery-aftertext

Call a function after the user is done typing. 

## Usage

The api is similar to the _setTimeout_ one:

```javascript
$('input').afterText(function() {
  alert('bacon');
}, 1000);
```