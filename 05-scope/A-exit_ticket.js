let role; // some value
role = someFunc()

// dont do this
if (role === 'student') {
    doThis();
} else if (role === 'teacher') {
    doThat();
} else {
    doTheOther();
}

// do this
switch(role) {
  case 'student':
    doThis();
    break;
  case 'teacher':
    doThat();
    break;
  default:
    DoTheOther();
    break;
}