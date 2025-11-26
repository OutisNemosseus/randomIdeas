// Auto-generated from K&R C Programming Language solutions

const programs = [
  {
    id: 'ex0101',
    title: 'Exercise 1.1: Hello World',
    displayName: 'Ex 1.1: Hello World',
    description: 'Hello World',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

int main(void)
{
  printf("hello, world\\n");
  return 0;
}
`,
    tags: ["chapter01", "exercise1-1", "kandr", "c-programming"]
  },
  {
    id: 'ex0102',
    title: 'Exercise 1.2: Printf Argument',
    displayName: 'Ex 1.2: Printf Argument',
    description: 'Printf Argument',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

int main(void)
{
  printf("hello, world\\c");
  return 0;
}
`,
    tags: ["chapter01", "exercise1-2", "kandr", "c-programming"]
  },
  {
    id: 'ex0103',
    title: 'Exercise 1.3: Print Fahrenheit-Celsius table',
    displayName: 'Ex 1.3: Fahrenheit Celsius',
    description: 'Print Fahrenheit-Celsius table',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

// Print Fahrenheit-Celsius table
// for fahr = 0, 20, ... 300
// floating point version

int main(void)
{
  float fahr, celsius;
  int lower, upper, step;

  lower = 0;
  upper = 300;
  step = 20;

  // Printing a heading above the table
  printf("Fahr\\tCelsius\\n");
  printf("---------------\\n");

  fahr = lower;
  while (fahr <= upper)
  {
    celsius = (5.0 / 9.0) * (fahr - 32.0);
    printf("%3.0f\\t\\t%6.1f\\n", fahr, celsius);
    fahr = fahr + step;
  }

  return 0;
}

// NOTE: If all operands from an operation are integers then a integer operation
// is performed. If at least one operand is a floating point number then a
// floating point operation will be performed.
`,
    tags: ["chapter01", "exercise1-3", "kandr", "c-programming"]
  },
  {
    id: 'ex0104',
    title: 'Exercise 1.4: Print Celsius-Fahrenheit table',
    displayName: 'Ex 1.4: Celsius Fahrenheit',
    description: 'Print Celsius-Fahrenheit table',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

// Print Celsius-Fahrenheit table
// for celsius = 0, 20, ... 300
// floating point version

int main(void)
{
  float celsius, fahr;
  int lower, upper, step;

  lower = 0;
  upper = 300;
  step = 20;

  printf("Celsius\\tFahr\\n");
  printf("---------------\\n");

  celsius = lower;
  while (celsius <= upper)
  {
    fahr = (9.0 / 5.0) * celsius + 32.0f;
    printf("%3.0f\\t\\t%6.1f\\n", celsius, fahr);
    celsius = celsius + step;
  }

  return 0;
}
`,
    tags: ["chapter01", "exercise1-4", "kandr", "c-programming"]
  },
  {
    id: 'ex0105',
    title: 'Exercise 1.5: Print Celsius-Fahrenheit table',
    displayName: 'Ex 1.5: Celsius Fahrenheit',
    description: 'Print Celsius-Fahrenheit table',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

// Print Celsius-Fahrenheit table
// for celsius = 0, 20, ... 300
// floating point version with for loop

int main(void)
{
  float celsius, fahr;
  int lower, upper, step;

  lower = 0;
  upper = 300;
  step = 20;

  printf("Celsius\\tFahr\\n");
  printf("---------------\\n");

  for (celsius = upper; celsius >= lower; celsius = celsius - step)
  {
    fahr = (9.0 / 5.0) * celsius + 32.0f;
    printf("%3.0f\\t\\t%6.1f\\n", celsius, fahr);
  }

  return 0;
}

// NOTE: Sometimes the for loop can be more explicit and more readable then the
// while loop because it's more compact. The initialization and the incrementation
// of the counter variable is done through the for loop params. However, the while
// loop can be, sometimes, more customizable.
`,
    tags: ["chapter01", "exercise1-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0106',
    title: 'Exercise 1.6: NOTE: The expression getchar() != EOF is equal with 1 only if input char',
    displayName: 'Ex 1.6: Verify Expression',
    description: 'NOTE: The expression getchar() != EOF is equal with 1 only if input char',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

int main(void)
{
  printf("value of expression: %d", getchar() != EOF);
  return 0;
}

// NOTE: The expression getchar() != EOF is equal with 1 only if input char
// is != with EOF. A useful thing to know is that on Windows the EOF char is
// accessible with CTRL+Z, while on Unix like systems the EOF char is
// accessible with CTRL+D.
`,
    tags: ["chapter01", "exercise1-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0107',
    title: 'Exercise 1.7: NOTE: The value of the EOF character is -1, which is an integer.',
    displayName: 'Ex 1.7: Print Eof',
    description: 'NOTE: The value of the EOF character is -1, which is an integer.',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

int main(void)
{
  printf("EOF: %d", EOF);
  return 0;
}

// NOTE: The value of the EOF character is -1, which is an integer.
`,
    tags: ["chapter01", "exercise1-7", "kandr", "c-programming"]
  },
  {
    id: 'ex0108',
    title: 'Exercise 1.8: Count B T N',
    displayName: 'Ex 1.8: Count B T N',
    description: 'Count B T N',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

int main(void)
{
  int blanks_nr = 0;
  int tabs_nr = 0;
  int newlines_nr = 0;

  char c;
  while ((c = getchar()) != EOF)
  {
    if (c == ' ')
    {
      ++blanks_nr;
    }
    else if (c == '\\t')
    {
      ++tabs_nr;
    }
    else if (c == '\\n')
    {
      ++newlines_nr;
    }
  }

  printf("blanks_nr: %d\\ntabs_nr: %d\\nnewlines_nr: %d\\n",
         blanks_nr, tabs_nr, newlines_nr);

  return 0;
}
`,
    tags: ["chapter01", "exercise1-8", "kandr", "c-programming"]
  },
  {
    id: 'ex0109',
    title: 'Exercise 1.9: Copy Io',
    displayName: 'Ex 1.9: Copy Io',
    description: 'Copy Io',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

int main(void)
{
  int c;
  int last_c = '\\0';

  while ((c = getchar()) != EOF)
  {
    if (c != ' ' || last_c != ' ')
    {
      putchar(c);
    }

    last_c = c;
  }

  return 0;
}
`,
    tags: ["chapter01", "exercise1-9", "kandr", "c-programming"]
  },
  {
    id: 'ex0110',
    title: 'Exercise 1.10: Copy Io Esc Replace',
    displayName: 'Ex 1.10: Copy Io Esc Replace',
    description: 'Copy Io Esc Replace',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

int main(void)
{
  char c;
  while ((c = getchar()) != EOF)
  {
    if (c == '\\t')
    {
      putchar('\\\\');
      putchar('t');
    }
    else if (c == '\\b')
    {
      putchar('\\\\');
      putchar('b');
    }
    else if (c == '\\\\')
    {
      putchar('\\\\');
      putchar('\\\\');
    }
    else
    {
      putchar(c);
    }
  }

  return 0;
}
`,
    tags: ["chapter01", "exercise1-10", "kandr", "c-programming"]
  },
  {
    id: 'ex0111',
    title: 'Exercise 1.11: Word Count Test',
    displayName: 'Ex 1.11: Word Count Test',
    description: 'Word Count Test',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define IN 1
#define OUT 0

int main(void)
{
  char nl;
  char nw;
  char nc;

  int state;

  nl = nw = nc = 0;
  state = OUT;

  char c;
  while ((c = getchar()) != EOF)
  {
    ++nc;

    if (c == '\\n')
    {
      ++nl;
    }

    if (c == ' ' || c == '\\n' || c == '\\t')
    {
      state = OUT;
    }
    else if (state == OUT)
    {
      state = IN;
      ++nw;
    }
  }

  printf("lines: %d\\nwords: %d\\ncharacters: %d\\n", nl, nw, nc);

  return 0;
}
`,
    tags: ["chapter01", "exercise1-11", "kandr", "c-programming"]
  },
  {
    id: 'ex0112',
    title: 'Exercise 1.12: Copy Io Nl',
    displayName: 'Ex 1.12: Copy Io Nl',
    description: 'Copy Io Nl',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

int main()
{
  int character;
  int previous_character = EOF;

  while ((character = getchar()) != EOF) {
    if (character == ' ' || character == '\\t' || character == '\\n') {
      if (previous_character != ' ' && previous_character != '\\t' && previous_character != '\\n') {
        putchar('\\n');
      }
    }
    else {
      putchar(character);
    }

    previous_character = character;
  }

  return 0;
}
`,
    tags: ["chapter01", "exercise1-12", "kandr", "c-programming"]
  },
  {
    id: 'ex0113',
    title: 'Exercise 1.13: Histogram',
    displayName: 'Ex 1.13: Histogram',
    description: 'Histogram',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define TRUE 1
#define FALSE 0

#define BUFFER 100

int main(void)
{
  int histogram[BUFFER];
  int histogram_length = 0;

  int max_word_count = 0;

  // Initialize the histogram array with 0
  int i;
  for (i = 0; i < BUFFER; ++i)
  {
    histogram[i] = 0;
  }

  // Count the words length and store in histogram array at the
  // specific index
  char c;
  int word_count_index = 0;
  while ((c = getchar()))
  {
    if (c == ' ' || c == '\\t' || c == '\\n' || c == EOF)
    {
      if (word_count_index > 0)
      {
        ++histogram[word_count_index - 1];

        if (histogram[word_count_index - 1] > max_word_count)
        {
          max_word_count = histogram[word_count_index - 1];
        }

        if (histogram_length < word_count_index - 1)
        {
          histogram_length = word_count_index - 1;
        }

        word_count_index = 0;
      }
      if (c == EOF)
      {
        break;
      }
    }
    else
    {
      ++word_count_index;
    }
  }

  // Add in the histogram array a end of useful data char
  histogram[histogram_length + 1] = '\$';

  putchar('\\n');

  int column_index = 0;
  int line_index = 0;

  // Print horizontal histogram
  printf("Horizontal Histogram\\n--------------------\\n");

  while (histogram[column_index] != '\$')
  {
    printf("%3d: \\t", column_index + 1);

    for (line_index = 0; line_index < histogram[column_index]; ++line_index)
    {
      putchar('#');
    }

    putchar('\\n');

    ++column_index;
  }

  putchar('\\n');

  // Print a vertical histogram
  printf("Vertical Histogram\\n------------------\\n");

  for (line_index = max_word_count; line_index >= 0; --line_index)
  {
    column_index = 0;
    while (histogram[column_index] != '\$')
    {
      if (line_index == 0)
      {
        printf("%2d ", column_index + 1);
      }
      else if (histogram[column_index] >= line_index)
      {
        printf("## ");
      }
      else
      {
        printf("   ");
      }

      ++column_index;
    }

    putchar('\\n');
  }

  return 0;
}
`,
    tags: ["chapter01", "exercise1-13", "kandr", "c-programming"]
  },
  {
    id: 'ex0114',
    title: 'Exercise 1.14: Frequency Histogram',
    displayName: 'Ex 1.14: Frequency Histogram',
    description: 'Frequency Histogram',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define ALPHA_NR 26
#define NUM_NR 10

int main(void)
{
  int i;
  char chars_freq[ALPHA_NR + NUM_NR];

  // Initialize the chars_freq array with 0
  for (i = 0; i < (ALPHA_NR + NUM_NR); ++i)
  {
    chars_freq[i] = 0;
  }

  // Count characters from the standard input
  char c;
  while ((c = getchar()) != EOF)
  {
    if (c >= 'a' && c <= 'z')
    {
      ++chars_freq[c - 'a'];
    }
    else if (c >= '0' && c <= '9')
    {
      ++chars_freq[c - '0' + ALPHA_NR];
    }
  }

  // Print horizontal histogram
  for (i = 0; i < (ALPHA_NR + NUM_NR); ++i)
  {
    if (i < ALPHA_NR)
    {
      printf("%c: ", 'a' + i);
    }
    else if (i >= ALPHA_NR)
    {
      printf("%c: ", '0' + i - ALPHA_NR);
    }

    int j;
    for (j = 0; j < chars_freq[i]; ++j)
    {
      printf("#");
    }

    putchar('\\n');
  }

  return 0;
}
`,
    tags: ["chapter01", "exercise1-14", "kandr", "c-programming"]
  },
  {
    id: 'ex0115',
    title: 'Exercise 1.15: Temperature Conversion',
    displayName: 'Ex 1.15: Temperature Conversion',
    description: 'Temperature Conversion',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

float celsius_to_fahrenheit(int celsius);

int main(void)
{
  float celsius, fahr;
  int lower, upper, step;

  lower = 0;
  upper = 300;
  step = 30;

  // Printing a heading abouve the table
  printf("Celsius\\t\\tFahr.\\n");
  printf("----------------------\\n");

  celsius = lower;
  while (celsius <= upper)
  {
    fahr = celsius_to_fahrenheit(celsius);
    printf("%3.0f\\t\\t%6.1f\\n", celsius, fahr);
    celsius += step;
  }

  return 0;
}

float celsius_to_fahrenheit(int celsius)
{
  return (9.0 / 5.0) * celsius + 32.0f;
}
`,
    tags: ["chapter01", "exercise1-15", "kandr", "c-programming"]
  },
  {
    id: 'ex0116',
    title: 'Exercise 1.16: Longest Line',
    displayName: 'Ex 1.16: Longest Line',
    description: 'Longest Line',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define MAXLINE 1000

int get_line(char line[], int maxline);
void copy(char from[], char to[]);

int main(void)
{
  int len;
  char line[MAXLINE];

  int maxlen;
  char maxline[MAXLINE];

  maxlen = 0;
  while ((len = get_line(line, MAXLINE)) > 0)
  {
    if (maxlen < len)
    {
      maxlen = len;
      copy(line, maxline);
    }

    printf("line_length: %d\\n", len);
  }

  if (maxlen > 0)
  {
    printf("%s", maxline);
  }

  return 0;
}

int get_line(char line[], int maxline)
{
  int c, i;

  for (i = 0; i < maxline - 1 && (c = getchar()) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }
  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }
  
  line[i] = '\\0';
  
  while(c != EOF && c != '\\n')
  {
    ++i;
    c = getchar();
  }
  
  if (c == '\\n')
    ++i;

  return i;
}

void copy(char from[], char to[])
{
  int i = 0;

  while ((to[i] = from[i]) != '\\0')
  {
    ++i;
  }
}
`,
    tags: ["chapter01", "exercise1-16", "kandr", "c-programming"]
  },
  {
    id: 'ex0117',
    title: 'Exercise 1.17: Line 80',
    displayName: 'Ex 1.17: Line 80',
    description: 'Line 80',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define MAXLINE 1000
#define LIMIT 80

int get_line(char line[], int max_line_len);

int main(void)
{
  int len;
  char line[MAXLINE];

  while ((len = get_line(line, MAXLINE)) > 0)
  {
    if (len > LIMIT)
    {
      printf("%s", line);
    }
  }

  return 0;
}

int get_line(char line[], int max_line_len)
{
  int c, i;

  for (i = 0; i < max_line_len - 1 && (c = getchar()) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }

  line[i] = '\\0';

  return i;
}
`,
    tags: ["chapter01", "exercise1-17", "kandr", "c-programming"]
  },
  {
    id: 'ex0118',
    title: 'Exercise 1.18: Trailing Blanks',
    displayName: 'Ex 1.18: Trailing Blanks',
    description: 'Trailing Blanks',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define MAXLINE 1000

int get_line(char line[], int max_line_len);
void remove_trailing_blanks(char line[], int length);

int main(void)
{
  int len;
  char line[MAXLINE];

  while ((len = get_line(line, MAXLINE)) > 0)
  {
    remove_trailing_blanks(line, len);
    printf("%s", line);
  }

  return 0;
}

int get_line(char line[], int max_line_len)
{
  int c, i;

  for (i = 0; i < max_line_len - 1 && (c = getchar()) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }

  line[i] = '\\0';

  return i;
}

void remove_trailing_blanks(char line[], int length)
{
  int i;

  for (i = length - 2; line[i] == ' ' || line[i] == '\\t'; --i)
    ;

  line[i + 1] = '\\n';
  line[i + 2] = '\\0';
}
`,
    tags: ["chapter01", "exercise1-18", "kandr", "c-programming"]
  },
  {
    id: 'ex0119',
    title: 'Exercise 1.19: Reverse',
    displayName: 'Ex 1.19: Reverse',
    description: 'Reverse',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define MAXLINE 1000

int get_line(char line[], int max_line_len);
int length(char line[]);
void reverse(char line[]);

int main(void)
{
  int len;
  char line[MAXLINE];

  while ((len = get_line(line, MAXLINE)) > 0)
  {
    reverse(line);
    printf("%s", line);
  }

  return 0;
}

int get_line(char line[], int max_line_len)
{
  int c, i;

  i = 0;
  while (i < max_line_len - 1 && (c = getchar()) != EOF && c != '\\n')
  {
    line[i] = c;
    ++i;
  }

  // flush out input stream if exceeding max_line_len limit
  while (i >= max_line_len - 1 && (c = getchar()) != '\\n')
    ;

  if (c == '\\n')
  {
    line[i] = '\\n';
    ++i;
  }

  line[i] = '\\0';

  return i;
}

int length(char line[])
{
  int i;

  for (i = 0; line[i] != '\\0'; ++i)
    ;

  return i;
}

void reverse(char line[])
{
  int i_front = 0;
  int i_back = length(line);
  char temp;

  if(line[i_back - 1] == '\\n')
  {
    i_back -= 2;
  }
  else
  {
    i_back -= 1;
  }
  
  while (i_back > i_front)
  {
    temp = line[i_front];
    line[i_front] = line[i_back];
    line[i_back] = temp;

    ++i_front;
    --i_back;
  }
}
`,
    tags: ["chapter01", "exercise1-19", "kandr", "c-programming"]
  },
  {
    id: 'ex0120',
    title: 'Exercise 1.20: Detab',
    displayName: 'Ex 1.20: Detab',
    description: 'Detab',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define TAB_LENGTH 8

int main(void)
{
  int c;
  unsigned int nr_of_spaces;

  while ((c = getchar()) != EOF)
  {
    if (c == '\\t')
    {
      nr_of_spaces = TAB_LENGTH;

      while (nr_of_spaces)
      {
        putchar(' ');
        --nr_of_spaces;
      }
    }
    else
    {
      putchar(c);
    }
  }

  return 0;
}

// NOTE: In UNIX like systems you can execute commands like this:
// ./detab < file_in.txt > file_out.txt that takes the input from a
// file and after the program processed its content puts it to another file.
`,
    tags: ["chapter01", "exercise1-20", "kandr", "c-programming"]
  },
  {
    id: 'ex0121',
    title: 'Exercise 1.21: Entab',
    displayName: 'Ex 1.21: Entab',
    description: 'Entab',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define TAB_LENGTH 8

int main(void)
{
  int c;
  unsigned int line_pos = 0;
  unsigned int nr_of_spaces = 0;

  while ((c = getchar()) != EOF)
  {
    ++line_pos;

    if (c == ' ')
    {
      ++nr_of_spaces;

      if (line_pos % TAB_LENGTH == 0 && nr_of_spaces > 1)
      {
        putchar('\\t');
        nr_of_spaces = 0;
      }
    }
    else
    {
      while (nr_of_spaces)
      {
        putchar(' ');
        --nr_of_spaces;
      }

      if (c == '\\n')
      {
        line_pos = 0;
      }

      putchar(c);
    }
  }

  return 0;
}

// NOTE: run: ./entab < file_in.txt > file_out.txt
`,
    tags: ["chapter01", "exercise1-21", "kandr", "c-programming"]
  },
  {
    id: 'ex0122',
    title: 'Exercise 1.22: Fold Line',
    displayName: 'Ex 1.22: Fold Line',
    description: 'Fold Line',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define MAXLINE 10000

#define TRUE (1 == 1)
#define FALSE !TRUE

#define BREAKING_POINT 40
#define OFFSET 10

int get_line(char line[], int max_line_len);
void fold_line(char line[], char fold_str[], int n_break);

int main(void)
{
  char line[MAXLINE];
  char fold_str[MAXLINE];

  while ((get_line(line, MAXLINE)) > 0)
  {
    fold_line(line, fold_str, BREAKING_POINT);
    printf("%s", fold_str);
  }

  return 0;
}

int get_line(char line[], int max_line_len)
{
  int c, i = 0;

  while (i < max_line_len - 1 && (c = getchar()) != EOF && c != '\\n')
  {
    line[i++] = c;
  }

  if (c == '\\n')
  {
    line[i++] = c;
  }

  line[i] = '\\0';

  return i;
}

void fold_line(char line[], char fold_str[], int n_break)
{
  int i, j;
  int column = 0;
  int split = FALSE;
  int last_blank = 0;

  for (i = 0, j = 0; line[i] != '\\0'; ++i, ++j)
  {
    fold_str[j] = line[i];

    if (fold_str[j] == '\\n')
    {
      column = 0;
    }

    column++;

    if (column == n_break - OFFSET)
    {
      split = TRUE;
    }

    if (split && (fold_str[j] == ' ' || fold_str[j] == '\\t'))
    {
      last_blank = j;
    }

    if (column == n_break)
    {
      if (last_blank)
      {
        fold_str[last_blank] = '\\n';
        column = j - last_blank;
        last_blank = 0;
      }
      else
      {
        fold_str[j++] = '-';
        fold_str[j] = '\\n';

        column = 0;
      }

      split = FALSE;
    }
  }

  fold_str[j] = '\\0';
}
`,
    tags: ["chapter01", "exercise1-22", "kandr", "c-programming"]
  },
  {
    id: 'ex0123',
    title: 'Exercise 1.23: This is a test comment.',
    displayName: 'Ex 1.23: C Remove Comments',
    description: 'This is a test comment.',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define MAXSTR 10000

#define TRUE (1 == 1)
#define FALSE !TRUE

// This is a test comment.

int get_str(char str[], int limit); // This is another test comment.
void remove_comments(char str[], char no_com_str[]);

int main(void)
{
  /**
   * This is multiline
   * block
   * comment.
  */

  char str[MAXSTR];
  char no_com_str[MAXSTR];

  get_str(str, MAXSTR);

  remove_comments(str, no_com_str);

  printf("%s", no_com_str);

  return 0;
}

int get_str(char str[], int limit)
{
  int c, i = 0;

  while (i < limit - 1 && (c = getchar()) != EOF)
  {
    str[i++] = c;
  }
  str[i] = '\\0';

  return i;
}

void remove_comments(char str[], char no_com_str[])
{
  int in_quote = FALSE;
  int line_comment = FALSE;
  int block_comment = FALSE;

  int i = 0, j = 0;
  while (str[i] != '\\0')
  {
    if (!block_comment)
    {
      if (!in_quote && str[i] == '"')
    {
      in_quote = TRUE;
    }
    else if (in_quote && str[i] == '"')
    {
      in_quote = FALSE;
    }
    }

    if (!in_quote)
    {
      if (str[i] == '/' && str[i + 1] == '*' && !line_comment)
      {
        block_comment = TRUE;
      }

      if (str[i] == '*' && str[i + 1] == '/')
      {
        block_comment = FALSE;
        i += 2;
      }

      if (str[i] == '/' && str[i + 1] == '/')
      {
        line_comment = TRUE;
      }

      if (str[i] == '\\n')
      {
        line_comment = FALSE;
      }

      if (line_comment || block_comment)
      {
        ++i;
      }
      else if (!line_comment || !block_comment)
      {
        no_com_str[j++] = str[i++];
      }
    }
    else
    {
      no_com_str[j++] = str[i++];
    }
  }

  no_com_str[j] = '\\0';
}

// NOTE: run: ./c_remove_comments < c_remove_comments.c
`,
    tags: ["chapter01", "exercise1-23", "kandr", "c-programming"]
  },
  {
    id: 'ex0124',
    title: 'Exercise 1.24: Check Syntax',
    displayName: 'Ex 1.24: Check Syntax',
    description: 'Check Syntax',
    chapter: '01',
    category: 'K&R - Chapter 1',
    cCode: `#include <stdio.h>

#define MAXSTR 10000

#define TRUE (1 == 1)
#define FALSE !TRUE

int get_str(char str[], int limit);
void check_syntax(char str[]);

int main(void)
{
  char str[MAXSTR];

  get_str(str, MAXSTR);
  check_syntax(str);

  return 0;
}

int get_str(char str[], int limit)
{
  int c, i = 0;

  while (i < limit - 1 && (c = getchar()) != EOF)
  {
    str[i++] = c;
  }
  str[i] = '\\0';

  return i;
}

void check_syntax(char str[])
{
  int parentheses = 0;
  int brackets = 0;
  int braces = 0;

  int single_quotes = FALSE;
  int double_quotes = FALSE;

  int block_comment = FALSE;
  int line_comment = FALSE;

  int i = 0;
  while (str[i] != '\\0' && parentheses >= 0 && brackets >= 0 && braces >= 0)
  {
    if (!line_comment && !block_comment && !single_quotes && !double_quotes)
    {
      if (str[i] == '(')
      {
        ++parentheses;
      }
      else if (str[i] == ')')
      {
        --parentheses;
      }

      if (str[i] == '[')
      {
        ++brackets;
      }
      else if (str[i] == ']')
      {
        --brackets;
      }

      if (str[i] == '{')
      {
        ++braces;
      }
      else if (str[i] == '}')
      {
        --braces;
      }
    }

    if (!line_comment && !block_comment)
    {
      if (str[i] == '\\'' && !single_quotes && !double_quotes)
      {
        single_quotes = TRUE;
      }
      else if (single_quotes && str[i] == '\\'' && (str[i - 1] != '\\\\' || str[i - 2] == '\\\\'))
      {
        single_quotes = FALSE;
      }

      if (str[i] == '"' && !single_quotes && !double_quotes)
      {
        double_quotes = TRUE;
      }
      else if (double_quotes && str[i] == '"' && (str[i - 1] != '\\\\' || str[i - 2] == '\\\\'))
      {
        double_quotes = FALSE;
      }
    }

    if (!single_quotes && !double_quotes)
    {
      if (str[i] == '/' && str[i + 1] == '*' && !line_comment)
      {
        block_comment = TRUE;
      }
      else if (str[i] == '*' && str[i + 1] == '/')
      {
        block_comment = FALSE;
      }

      if (str[i] == '/' && str[i + 1] == '/' && !block_comment)
      {
        line_comment = TRUE;
      }
      else if (str[i] == '\\n')
      {
        line_comment = FALSE;
      }
    }

    ++i;
  }

  if (parentheses)
  {
    printf("Error: unbalanced parentheses.\\n");
  }

  if (brackets)
  {
    printf("Error: unbalanced brackets.\\n");
  }

  if (braces)
  {
    printf("Error: unbalanced braces.\\n");
  }

  if (single_quotes)
  {
    printf("Error: unbalanced single quotes.\\n");
  }

  if (double_quotes)
  {
    printf("Error: unbalanced double quotes.\\n");
  }

  if (block_comment)
  {
    printf("Error: block comment not closed.\\n");
  }
}
`,
    tags: ["chapter01", "exercise1-24", "kandr", "c-programming"]
  },
  {
    id: 'ex0201',
    title: 'Exercise 2.1: Types Ranges',
    displayName: 'Ex 2.1: Types Ranges',
    description: 'Types Ranges',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>
#include <limits.h>

int main(void)
{
  printf("#################### CHAR #####################\\n");
  printf("bits: %d\\n", CHAR_BIT);
  printf("unsigned char max: %d\\n", UCHAR_MAX);
  printf("signed char min: %d\\n", SCHAR_MIN);
  printf("signed char max: %d\\n", SCHAR_MAX);
  printf("\\n");

  printf("##################### INT #####################\\n");
  printf("unsigned int max: %u\\n", UINT_MAX);
  printf("signed int min: %d\\n", INT_MIN);
  printf("signed int max: %d\\n", INT_MAX);
  printf("\\n");

  printf("################## SHORT INT ##################\\n");
  printf("unsigned short int max: %u\\n", USHRT_MAX);
  printf("signed short int min: %d\\n", SHRT_MIN);
  printf("signed short int max: %d\\n", SHRT_MAX);
  printf("\\n");

  printf("################## LONG INT ###################\\n");
  printf("unsigned long int max: %lu\\n", ULONG_MAX);
  printf("signed long int min: %ld\\n", LONG_MIN);
  printf("signed long int max: %ld\\n", LONG_MAX);
  printf("\\n");

  printf("################ LONG LONG INT #################\\n");
  printf("unsigned long long int max: %llu\\n", ULLONG_MAX);
  printf("signed long long int min: %lld\\n", LLONG_MIN);
  printf("signed long long int max: %lld\\n", LLONG_MAX);
  printf("\\n");

  return 0;
}

// NOTE: The limits.h header contains all the necessary constants machine
// dependent for types sizes.
`,
    tags: ["chapter02", "exercise2-1", "kandr", "c-programming"]
  },
  {
    id: 'ex0202',
    title: 'Exercise 2.2: Loop',
    displayName: 'Ex 2.2: Loop',
    description: 'Loop',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>

#define MAXLINE 1000

int main(void)
{
  char s[MAXLINE];

  // int i;
  // int c;
  // for (i = 0; (i < MAXLINE - 1) * ((c = getchar()) != '\\n') * (c != EOF); ++i)
  // {
  //   s[i] = c;
  // }

  int i = 0;
  int loop = 1;
  while (loop)
  {
    char c = getchar();

    if (i >= (MAXLINE - 1) || c == '\\n' || c == EOF)
    {
      loop = 0;
    }

    s[i++] = c;
  }

  s[i] = '\\0';

  printf("%s", s);

  return 0;
}

// NOTE: The multiplication operation could work in this case because each
// expression is evaluated as a 1 or 0 (true or false), and a multiplication
// between expressions can have the value 1 only if all the expressions are true.
// However, the order of multiplication is not guaranteed to be sequenced as with
// logical operations. So, this is could cause serious problems depending on how
// the compiler deals with multiplication.
`,
    tags: ["chapter02", "exercise2-2", "kandr", "c-programming"]
  },
  {
    id: 'ex0203',
    title: 'Exercise 2.3: Htoi',
    displayName: 'Ex 2.3: Htoi',
    description: 'Htoi',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>
#include <string.h>
#include <math.h>
#include <ctype.h>

#define MAXLINE 100

int get_line(char line[], int lim);
int htoi(char hex[]);

int main(void)
{
  char hex[MAXLINE];

  get_line(hex, MAXLINE);

  printf("%d", htoi(hex));

  return 0;
}

int get_line(char line[], int lim)
{
  char c;
  int i = 0;
  while (i < lim - 1 && (c = getchar()) != EOF && c != '\\n')
  {
    line[i++] = c;
  }

  line[i] = '\\0';

  return i;
}

int htoi(char hex[])
{
  int result = 0;

  int i = 0, len = strlen(hex);

  while (i < len)
  {
    if (hex[i] == '0' && (hex[i + 1] == 'x' || hex[i + 1] == 'X'))
    {
      i += 2;
    }

    int temp = tolower(hex[i]);

    if (isdigit(temp))
    {
      temp -= 48;
    }

    if (isalpha(temp) && temp <= 'f')
    {
      temp = temp - 'a' + 10;
    }

    if ((hex[i] >= '0' && hex[i] <= '9') || (hex[i] >= 'a' && hex[i] <= 'f') || (hex[i] >= 'A' && hex[i] <= 'F'))
    {
      result += temp * (int)pow(16, len - i - 1);
    }
    else
    {
      printf("Error: Not a valid hex value.\\n Try this format: 0xHHHH, where H is a hex digit.\\n");
    }

    ++i;
  }

  return result;
}

// NOTE: The conversion algorithm from hex to dec is very similar with the
// conversion algorithm from bin to dec, but the base is not 2 but 16.
// The general formula is: x1*B^N + x2*B^(N - 1) + ... + xn*B^(N - N), where B
// is the base from we convert to dec, in this case B = 16.
`,
    tags: ["chapter02", "exercise2-3", "kandr", "c-programming"]
  },
  {
    id: 'ex0204',
    title: 'Exercise 2.4: Squeeze',
    displayName: 'Ex 2.4: Squeeze',
    description: 'Squeeze',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>

#define MAXSTR 1000

void squeeze(char str1[], char str2[]);

int main(void)
{
  char str1[MAXSTR] = "abcdefg";
  char str2[MAXSTR] = "abcd";

  squeeze(str1, str2);

  printf("%s", str1);

  return 0;
}

void squeeze(char str1[], char str2[])
{
  int i, j, k;
  for (k = 0; str2[k] != '\\0'; ++k)
  {
    for (i = j = 0; str1[i] != '\\0'; ++i)
    {
      if (str1[i] != str2[k])
      {
        str1[j++] = str1[i];
      }
    }

    str1[j] = '\\0';
  }
}
`,
    tags: ["chapter02", "exercise2-4", "kandr", "c-programming"]
  },
  {
    id: 'ex0205',
    title: 'Exercise 2.5: Any',
    displayName: 'Ex 2.5: Any',
    description: 'Any',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXSTR 1000

int any(char str1[], char str2[]);

int main(void)
{
  char str1[MAXSTR] = "xxxabcabc";
  char str2[MAXSTR] = "cbaa";

  printf("%d", any(str1, str2));

  return 0;
}

int any(char str1[], char str2[])
{
  int i, j;
  for (i = 0; str1[i] != '\\0'; ++i)
  {
    for (j = 0; str2[j] != '\\0'; ++j)
    {
      if (str1[i] == str2[j])
      {
        return i;
      }
    }
  }

  return -1;
}

// NOTE: The standard library (string.h), cotains the function strpbrk which
// returns a pointer to the location of the char from the first string.
`,
    tags: ["chapter02", "exercise2-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0206',
    title: 'Exercise 2.6: Setbits',
    displayName: 'Ex 2.6: Setbits',
    description: 'Setbits',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>

#define BYTE_TO_BINARY_PATTERN "%c%c%c%c%c%c%c%c\\n"
#define BYTE_TO_BINARY(byte)   \\
  (byte & 128 ? '1' : '0'),    \\
      (byte & 64 ? '1' : '0'), \\
      (byte & 32 ? '1' : '0'), \\
      (byte & 16 ? '1' : '0'), \\
      (byte & 8 ? '1' : '0'),  \\
      (byte & 4 ? '1' : '0'),  \\
      (byte & 2 ? '1' : '0'),  \\
      (byte & 1 ? '1' : '0')

unsigned int setbits(int x, int p, int n, int y);

int main(void)
{
  unsigned int x = 0b11111111;
  unsigned int y = 0b0110;

  printf(BYTE_TO_BINARY_PATTERN, BYTE_TO_BINARY(x));
  printf(BYTE_TO_BINARY_PATTERN, BYTE_TO_BINARY(setbits(x, 2, 4, y)));

  return 0;
}

unsigned int setbits(int x, int p, int n, int y)
{
  ++p; // First position is 0

  unsigned int mask1 = (~(~(~0 << n) << p) & x);
  unsigned int mask2 = (~(~0 << n) & y) << p;

  return mask1 | mask2;
}

// NOTE: Masking is a very good technique to work with bits. We can think about
// logic AND as a multiply and for OR as an addition.
`,
    tags: ["chapter02", "exercise2-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0207',
    title: 'Exercise 2.7: Invert',
    displayName: 'Ex 2.7: Invert',
    description: 'Invert',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>

#define BYTE_TO_BINARY_PATTERN "%c%c%c%c%c%c%c%c\\n"
#define BYTE_TO_BINARY(byte)   \\
  (byte & 128 ? '1' : '0'),    \\
      (byte & 64 ? '1' : '0'), \\
      (byte & 32 ? '1' : '0'), \\
      (byte & 16 ? '1' : '0'), \\
      (byte & 8 ? '1' : '0'),  \\
      (byte & 4 ? '1' : '0'),  \\
      (byte & 2 ? '1' : '0'),  \\
      (byte & 1 ? '1' : '0')

unsigned int invert(int x, int p, int n);

int main(void)
{
  unsigned int x = 0b11010111;

  printf(BYTE_TO_BINARY_PATTERN, BYTE_TO_BINARY(x));
  printf(BYTE_TO_BINARY_PATTERN, BYTE_TO_BINARY(invert(x, 1, 4)));

  return 0;
}

unsigned int invert(int x, int p, int n)
{
  ++p; // First position is 0

  unsigned int mask1 = ~(~0 << n) << p;
  unsigned int mask2 = ~mask1 & x;

  return mask2 | ~x;
}
`,
    tags: ["chapter02", "exercise2-7", "kandr", "c-programming"]
  },
  {
    id: 'ex0208',
    title: 'Exercise 2.8: Rightrot',
    displayName: 'Ex 2.8: Rightrot',
    description: 'Rightrot',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>
#include <math.h>

void printbin(unsigned int x);
unsigned int rightrot(unsigned int x, unsigned int n);

int main(void)
{
  unsigned int x = 0b11110101;

  printbin(x);
  printbin(rightrot(x, 5));

  return 0;
}

void printbin(unsigned int x)
{
  unsigned int n = sizeof(unsigned int);

  printf("0b");

  int i;
  for (i = n * 8 - 1; i >= 0; --i)
  {
    (x & (unsigned int)pow(2, i)) ? putchar('1') : putchar('0');
  }

  putchar('\\n');
}

unsigned int rightrot(unsigned int x, unsigned int n)
{
  unsigned int msb_1 = ~(~(unsigned)0 >> 1);

  int i;
  for (i = 0; i < n; ++i)
  {
    if (x & 1)
    {
      x = (x >> 1) | msb_1;
    }
    else
    {
      x = (x >> 1);
    }
  }

  return x;
}

// NOTE: The rightrot function rotate the entire unsigned int var and if we print
// just a byte we can't see all bits. In order to print all the bits from an
// unsigned int we need to determine the size of an unsigned int, wich is
// machine dependent, and then print 0 or 1 to the output using powers of 2.
`,
    tags: ["chapter02", "exercise2-8", "kandr", "c-programming"]
  },
  {
    id: 'ex0209',
    title: 'Exercise 2.9: Bitcount',
    displayName: 'Ex 2.9: Bitcount',
    description: 'Bitcount',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>
#include <math.h>

void printbits(unsigned int x);
int bitcount(unsigned int x);

int main(void)
{
  unsigned int x = 0b011010;

  printbits(x);
  printf("x have %d bits of 1.\\n", bitcount(x));

  return 0;
}

void printbits(unsigned int x)
{
  unsigned int n = sizeof(unsigned int);

  printf("0b");

  int i;
  for (i = n * 8 - 1; i >= 0; --i)
  {
    (x & (unsigned int)pow(2, i)) ? putchar('1') : putchar('0');
  }

  putchar('\\n');
}

int bitcount(unsigned int x)
{
  int b = 0;

  while (x)
  {
    x &= (x - 1);
    ++b;
  }

  return b;
}

// NOTE: The expression x &= (x - 1) deletes the rightmost 1-bit of x because
// x is decremented by 1 and masked with the initial x. If decremented x has
// the rightmost bit 1, shifted to right by logic & operation, it is deleted.
`,
    tags: ["chapter02", "exercise2-9", "kandr", "c-programming"]
  },
  {
    id: 'ex0210',
    title: 'Exercise 2.10: Lower',
    displayName: 'Ex 2.10: Lower',
    description: 'Lower',
    chapter: '02',
    category: 'K&R - Chapter 2',
    cCode: `#include <stdio.h>

char lower(char c);

int main(void)
{
  char a = 'A';

  putchar(lower(a));

  return 0;
}

char lower(char c)
{
  return (c >= 'A' && c <= 'Z') ? c += 'a' - 'A' : c;
}

// NOTE: The ternary operator ?: can be used direct in return.
`,
    tags: ["chapter02", "exercise2-10", "kandr", "c-programming"]
  },
  {
    id: 'ex0301',
    title: 'Exercise 3.1: Binsearch',
    displayName: 'Ex 3.1: Binsearch',
    description: 'Binsearch',
    chapter: '03',
    category: 'K&R - Chapter 3',
    cCode: `#include <stdio.h>
#include <time.h>

#define MAXLEN 10000
#define ITERATIONS 100000

void initVector(int v[], int n);
void printVector(int v[], int n);

int binsearch_kr(int x, int v[], int n);
int binsearch(int x, int v[], int n);

void test_binsearch(int binsearch(int x, int v[], int n), int x, int v[], int n);

int main(void)
{
  int v[MAXLEN];

  initVector(v, MAXLEN);
  // printVector(v, MAXLEN);

  int x = -1;

  // Test binsearch_kr()
  test_binsearch(binsearch_kr, x, v, MAXLEN);

  // Test binsearch()
  test_binsearch(binsearch, x, v, MAXLEN);

  return 0;
}

void initVector(int v[], int n)
{
  int i;
  for (i = 0; i < n; ++i)
  {
    v[i] = i;
  }
}

void printVector(int v[], int n)
{
  int i;

  printf("[ ");
  for (i = 0; i < n; ++i)
  {
    (i != n - 1) ? printf("%d, ", v[i]) : printf("%d ]\\n", v[i]);
  }
}

int binsearch_kr(int x, int v[], int n)
{
  int low, mid, high;

  low = 0;
  high = n - 1;
  while (low <= high)
  {
    mid = (low + high) / 2;

    if (x < v[mid])
    {
      high = mid - 1;
    }
    else if (x > v[mid])
    {
      low = mid + 1;
    }
    else
    {
      return mid;
    }
  }

  return -1;
}

int binsearch(int x, int v[], int n)
{
  int low, mid, high;

  low = 0;
  high = n - 1;
  while (low <= high)
  {
    mid = (low + high) / 2;

    if (x < v[mid])
    {
      high = mid - 1;
    }
    else
    {
      low = mid + 1;
    }
  }

  if (x == v[low - 1])
  {
    return low - 1;
  }

  return -1;
}

void test_binsearch(int binsearch(int x, int v[], int n), int x, int v[], int n)
{
  static int test_nr = 0;
  long clocks = clock();

  int i;
  for (i = 0; i < ITERATIONS; ++i)
  {
    binsearch(x, v, n);
  }

  clocks = clock() - clocks;

  printf("test_%d: %lu clocks (%.4f seconds)\\n", test_nr, clocks, (double)clocks / CLOCKS_PER_SEC);

  ++test_nr;
}

// NOTE: By using a simple test in the for loop there is a chance to increase the
// binsearch() execution speed. Just modifying an if-else statement from 3 branches
// with two condition testing to 2 branches with 1 condition testing will not
// increase drasticaly the program performance on modern machines, but is a better
// aproach.
`,
    tags: ["chapter03", "exercise3-1", "kandr", "c-programming"]
  },
  {
    id: 'ex0302',
    title: 'Exercise 3.2: Escape',
    displayName: 'Ex 3.2: Escape',
    description: 'Escape',
    chapter: '03',
    category: 'K&R - Chapter 3',
    cCode: `#include <stdio.h>

#define MAXLEN 1000

int get_line(char line[], unsigned int limit);
void escape(char dest[], char src[]);
void unescape(char dest[], char src[]);

int main(void)
{
  char src[MAXLEN];
  char dest[MAXLEN];

  get_line(src, MAXLEN);
  printf("%s", src);

  escape(dest, src);
  printf("%s\\n", dest);

  unescape(dest, src);
  printf("%s", dest);

  return 0;
}

int get_line(char line[], unsigned int limit)
{
  int i, c;
  for (i = 0; i < limit - 1 && (c = getchar()) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i++] = c;
  }

  line[i] = '\\0';

  return i;
}

void escape(char dest[], char src[])
{
  int i, j;
  for (i = j = 0; src[i] != '\\0'; ++i, ++j)
  {
    switch (src[i])
    {
    case '\\a':
      dest[j++] = '\\\\';
      dest[j] = 'a';
      break;

    case '\\b':
      dest[j++] = '\\\\';
      dest[j] = 'b';
      break;

    case '\\f':
      dest[j++] = '\\\\';
      dest[j] = 'f';
      break;

    case '\\n':
      dest[j++] = '\\\\';
      dest[j] = 'n';
      break;

    case '\\r':
      dest[j++] = '\\\\';
      dest[j] = 'r';
      break;

    case '\\t':
      dest[j++] = '\\\\';
      dest[j] = 't';
      break;

    case '\\v':
      dest[j++] = '\\\\';
      dest[j] = 'v';
      break;

    case '\\\\':
      dest[j++] = '\\\\';
      dest[j] = '\\\\';
      break;

    case '\\?':
      dest[j++] = '\\\\';
      dest[j] = '?';
      break;

    case '\\'':
      dest[j++] = '\\\\';
      dest[j] = '\\'';
      break;

    case '\\"':
      dest[j++] = '\\\\';
      dest[j] = '"';
      break;

    default:
      dest[j] = src[i];
      break;
    }
  }

  if (src[i] == '\\0')
  {
    dest[j] = src[i];
  }
}

void unescape(char dest[], char src[])
{
  int i, j;
  for (i = j = 0; src[i] != '\\0'; ++i, ++j)
  {
    switch (src[i])
    {
    case '\\\\':
      switch (src[++i])
      {
      case 'a':
        dest[j] = '\\a';
        break;

      case 'b':
        dest[j] = '\\b';
        break;

      case 'f':
        dest[j] = '\\f';
        break;

      case 'n':
        dest[j] = '\\n';
        break;

      case 'r':
        dest[j] = '\\r';
        break;

      case 't':
        dest[j] = '\\t';
        break;

      case 'v':
        dest[j] = '\\v';
        break;

      case '\\\\':
        dest[j] = '\\\\';
        break;

      case '?':
        dest[j] = '\\?';
        break;

      case '\\'':
        dest[j] = '\\'';
        break;

      case '"':
        dest[j] = '\\"';
        break;

      default:
        dest[j++] = '\\\\';
        dest[j] = src[i];
        break;
      }
      break;

    default:
      dest[j] = src[i];
      break;
    }
  }

  if (src[i] == '\\0')
  {
    dest[j] = src[i];
  }
}
`,
    tags: ["chapter03", "exercise3-2", "kandr", "c-programming"]
  },
  {
    id: 'ex0303',
    title: 'Exercise 3.3: Expand',
    displayName: 'Ex 3.3: Expand',
    description: 'Expand',
    chapter: '03',
    category: 'K&R - Chapter 3',
    cCode: `#include <stdio.h>
#include <ctype.h>

#define MAXLEN 10000

int get_str(char str[], int limit);
void expand(char src[], char dest[]);

int main(void)
{
  char str[MAXLEN];
  char expanded_str[MAXLEN];

  get_str(str, MAXLEN);
  expand(str, expanded_str);
  printf("%s", expanded_str);

  return 0;
}

int get_str(char str[], int limit)
{
  int c, i = 0;

  while (i < limit - 1 && (c = getchar()) != EOF)
  {
    str[i++] = c;
  }
  str[i] = '\\0';

  return i;
}

void expand(char src[], char dest[])
{
  /**
   * a-z
   * a-b-c
   * a-c-h-v
   * a-c-b-v
   * 0-9
   * 1-5
   * a-zA-Z
   * 0-9a-zA-Z
   * -a-z
   * a-z-
   * -a-z-
   */
  int i, j = 0;
  for (i = 0; i < MAXLEN - 1 && j < MAXLEN - 1 && src[i] != EOF; ++i)
  {
    if (isalnum(src[i]) && src[i + 1] == '-' && src[i] < src[i + 2])
    {
      do
      {
        int k;
        for (k = 0; k <= (src[i + 2] - src[i]); ++k)
        {
          int temp = src[i] + k;
          if (dest[j - 1] != temp && (isdigit(temp) || isalpha(temp)))
          {
            dest[j++] = temp;
          }
        }

        i += 2;
      } while (isalnum(src[i]) && src[i + 1] == '-' && src[i] < src[i + 2]);
    }
    else
    {
      dest[j++] = src[i];
    }
  }
  dest[j] = '\\0';
}
`,
    tags: ["chapter03", "exercise3-3", "kandr", "c-programming"]
  },
  {
    id: 'ex0304',
    title: 'Exercise 3.4: Itoa',
    displayName: 'Ex 3.4: Itoa',
    description: 'Itoa',
    chapter: '03',
    category: 'K&R - Chapter 3',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

#define MAXLEN 1000

void int_to_array(int n, char s[]);
void str_reverse(char str1[], int index, int size);

int main(void)
{
  int n = 785;
  char number_str[MAXLEN];

  int_to_array(n, number_str);
  printf("%s\\n", number_str);

  return 0;
}

void int_to_array(int n, char s[])
{
  int i, sign;

  sign = n;

  i = 0;
  do
  {
    s[i++] = abs(n % 10) + '0';
  } while (n /= 10);

  if (sign < 0)
  {
    s[i++] = '-';
  }

  s[i] = '\\0';

  int s_len = strlen(s);
  str_reverse(s, 0, s_len - 1);
}

void str_reverse(char str1[], int index, int size)
{
  char temp;

  temp = str1[index];
  str1[index] = str1[size - index];
  str1[size - index] = temp;

  if (index == size / 2)
  {
    return;
  }

  str_reverse(str1, index + 1, size);
}

// NOTE: It does not handle the smallest negative number because it does not have
// a positive equivalent. This means that just using a expression like n = -n is
// not enough for the smallest negative number. If we take the absolute value of
// n % 10 we get the correct value and character.
`,
    tags: ["chapter03", "exercise3-4", "kandr", "c-programming"]
  },
  {
    id: 'ex0305',
    title: 'Exercise 3.5: Itob',
    displayName: 'Ex 3.5: Itob',
    description: 'Itob',
    chapter: '03',
    category: 'K&R - Chapter 3',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXLEN 100

char itoc(int a);
void itob(int n, char s[], int b);
void str_reverse(char str1[], int index, int size);

int main(void)
{
  char s[MAXLEN];

  int n = -2;

  itob(n, s, 16);

  printf("%s", s);

  return 0;
}

char itoc(int a)
{
  if (a <= 9)
  {
    return a + '0';
  }

  return a + 'a' - 10;
}

void itob(int n, char s[], int b)
{
  int i = 0, sign = n;

  do
  {
    s[i++] = itoc(abs(n) % b);
    n /= b;
  } while (n);

  switch (b)
  {
  case 2:
    s[i++] = 'b';
    s[i++] = '0';
    break;

  case 16:
    s[i++] = 'x';
    s[i++] = '0';
    break;
  }

  if (sign < 0)
  {
    s[i++] = '-';
  }

  s[i] = '\\0';

  int s_len = strlen(s);
  str_reverse(s, 0, s_len - 1);
}

void str_reverse(char str1[], int index, int size)
{
  char temp;

  temp = str1[index];
  str1[index] = str1[size - index];
  str1[size - index] = temp;

  if (index == size / 2)
  {
    return;
  }

  str_reverse(str1, index + 1, size);
}

// NOTE: It is simple to convert an integer variable to any base just by taking
// the remainder of the number divided by base and then dividing the initial
// number by base. The result need to be reversed to be correct.
`,
    tags: ["chapter03", "exercise3-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0306',
    title: 'Exercise 3.6: Itoa',
    displayName: 'Ex 3.6: Itoa',
    description: 'Itoa',
    chapter: '03',
    category: 'K&R - Chapter 3',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

#define MAXLEN 1000

int ilen(int a);
void int_to_array(int n, char s[], int padding);
void str_reverse(char str1[], int index, int size);

int main(void)
{
  int n = 1995;
  char number_str[MAXLEN];

  int_to_array(n, number_str, 6);
  printf("%s\\n", number_str);

  return 0;
}

int ilen(int a)
{
  int i = 0;

  do
  {
    ++i;
  } while (a /= 10);

  return i;
}

void int_to_array(int n, char s[], int padding)
{
  int i = 0, sign = n;

  do
  {
    s[i++] = abs(n % 10) + '0';
  } while (n /= 10);

  if (sign < 0)
  {
    s[i++] = '-';
  }

  int len = ilen(sign);
  while (len < padding)
  {
    s[i++] = ' ';
    --padding;
  }

  s[i] = '\\0';

  int s_len = strlen(s);
  str_reverse(s, 0, s_len - 1);
}

void str_reverse(char str1[], int index, int size)
{
  char temp;

  temp = str1[index];
  str1[index] = str1[size - index];
  str1[size - index] = temp;

  if (index == size / 2)
  {
    return;
  }

  str_reverse(str1, index + 1, size);
}
`,
    tags: ["chapter03", "exercise3-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0401',
    title: 'Exercise 4.1: Strindex',
    displayName: 'Ex 4.1: Strindex',
    description: 'Strindex',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>
#include <string.h>

#define MAXLEN 1000

int get_line(char line[], int lim);
int strindex(char source[], char pattern[]);

int main(void)
{
  char line[MAXLEN];
  char pattern[MAXLEN] = "example";

  get_line(line, MAXLEN);
  printf("%s\\n", line);

  printf("Pattern found at index %d\\n", strindex(line, pattern));

  return 0;
}

int get_line(char line[], int lim)
{
  int i = 0, c;

  while (lim > 0 && (c = getchar()) != EOF && c != '\\n')
  {
    line[i++] = c;
    --lim;
  }

  if (c == '\\n')
  {
    line[i++] = c;
  }

  line[i] = '\\0';

  return i;
}

int strindex(char source[], char pattern[])
{
  int i, j, k;

  printf("line len: %lu\\n", strlen(source));

  for (i = strlen(source); i >= 0; --i)
  {
    for (j = i, k = 0; pattern[k] != '\\0' && source[j] == pattern[k]; ++j, ++k)
      ;

    if (k > 0 && pattern[k] == '\\0')
    {
      return i;
    }
  }

  return -1;
}

// NOTE: It is simple to find the rightmost string pattern in the initial string
// if we search for the pattern by iterating the initial string from the end to
// the begining.
`,
    tags: ["chapter04", "exercise4-1", "kandr", "c-programming"]
  },
  {
    id: 'ex0402',
    title: 'Exercise 4.2: Atof',
    displayName: 'Ex 4.2: Atof',
    description: 'Atof',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>
#include <ctype.h>

#define MAXLEN 500

int get_line(char line[], unsigned int max_line_len);
double atof(char s[]);

int main(void)
{
  char line[MAXLEN];

  get_line(line, MAXLEN);
  printf("%s", line);

  printf("%f", atof(line));

  return 0;
}

int get_line(char line[], unsigned int max_line_len)
{
  int i = 0, c;

  while (i < max_line_len - 1 && (c = getchar()) != '\\n')
  {
    line[i] = c;
    ++i;
  }

  if (c == '\\n')
  {
    line[i++] = c;
  }

  line[i] = '\\0';

  return i;
}

double atof(char s[])
{
  double val, power;
  int i, sign, exp_sign = 1, exp_pwr = 0;

  for (i = 0; isspace(s[i]); ++i)
    ;

  sign = (s[i] == '-') ? -1 : 1;

  if (s[i] == '+' || s[i] == '-')
  {
    ++i;
  }

  for (val = 0.0; isdigit(s[i]); ++i)
  {
    val = 10.0 * val + (s[i] - '0');
  }

  if (s[i] == '.')
  {
    ++i;
  }

  for (power = 1.0; isdigit(s[i]); ++i)
  {
    val = 10.0 * val + (s[i] - '0');
    power *= 10;
  }

  if (s[i] == 'e' || s[i] == 'E')
  {
    if (s[++i] == '-')
    {
      exp_sign = -1;
      ++i;
    }
  }

  while (isdigit(s[i]))
  {
    exp_pwr = 10 * exp_pwr + (s[i] - '0');
    ++i;
  }

  while (exp_pwr)
  {
    if (exp_sign == -1)
    {
      power *= 10;
    }
    else
    {
      power /= 10;
    }

    --exp_pwr;
  }

  return sign * val / power;
}
`,
    tags: ["chapter04", "exercise4-2", "kandr", "c-programming"]
  },
  {
    id: 'ex0403',
    title: 'Exercise 4.3: Calculator',
    displayName: 'Ex 4.3: Calculator',
    description: 'Calculator',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#define MAXOP 100
#define MAXVAL 100
#define BUFFSIZE 100
#define NUMBER '0'

int getop(char[]);
void push(double);
double pop(void);

int main(void)
{
  int type;
  double op2;
  char s[MAXOP];

  while ((type = getop(s)) != EOF)
  {
    switch (type)
    {
    case NUMBER:
      push(atof(s));
      break;

    case '+':
      push(pop() + pop());
      break;

    case '-':
      op2 = pop();
      push(pop() - op2);
      break;

    case '*':
      push(pop() * pop());
      break;

    case '/':
      op2 = pop();

      if (op2 != 0.0)
      {
        push(pop() / op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }

      break;

    case '%':
      op2 = pop();

      if (op2 != 0.0)
      {
        push((int)pop() % (int)op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }
      break;

    case '\\n':
      printf("result: %.8g\\n", pop());
      break;

    default:
      printf("Error: unknown command %s.\\n", s);
      break;
    }
  }

  return 0;
}

int sp = 0;
double val[MAXVAL];

void push(double f)
{
  if (sp < MAXVAL)
  {
    val[sp++] = f;
  }
  else
  {
    printf("Error: stack full, can't push %g.\\n", f);
  }
}

double pop(void)
{
  if (sp > 0)
  {
    return val[--sp];
  }
  else
  {
    printf("Error: stack empty.\\n");
    return 0.0;
  }
}

int bufp = 0;
char buf[BUFFSIZE];

int getch(void)
{
  return (bufp > 0) ? buf[--bufp] : getchar();
}

void ungetch(int c)
{
  if (bufp >= BUFFSIZE)
  {
    printf("ungetch: too many characters\\n");
  }
  else
  {
    buf[bufp++] = c;
  }
}

int getop(char s[])
{
  int i = 0, c;

  while ((s[0] = c = getch()) == ' ' || c == '\\t')
    ;

  s[1] = '\\0';

  if (!isdigit(c) && c != '.' && c != '-')
  {
    return c;
  }

  if (c == '-')
  {
    int next = getch();
    if (next == '\\n' || next == ' ' || next == '\\t')
    {
      ungetch(next);
      return c; // return '-' as operator
    }
    else if (!isdigit(next) && next != '.')
    {
      return next; // not a number
    }
    else // number like "-5", "-.6" etc, next is digit or '.'
    {
      s[++i] = c = next;
    }
  }
  else
  {
    c = getch();
  }

  if (isdigit(c))
  {
    while (isdigit(s[++i] = c = getch()))
      ;
  }

  if (c == '.')
  {
    while (isdigit(s[++i] = c = getch()))
      ;
  }

  if (c != EOF)
  {
    ungetch(c);
  }

  return NUMBER;
}

// NOTE: The getch() function check if there are characters in a buffer. If there
// are characters the function will return the last character from the
// buffer, else getchar() function is called. The ungetch() function will push
// the last character in the buffer.
`,
    tags: ["chapter04", "exercise4-3", "kandr", "c-programming"]
  },
  {
    id: 'ex0404',
    title: 'Exercise 4.4: Stack',
    displayName: 'Ex 4.4: Stack',
    description: 'Stack',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#define MAXOP 100
#define MAXVAL 100
#define BUFFSIZE 100
#define NUMBER '0'

int getop(char[]);

void push(double f);
double pop(void);
void view_head(void);
void duplicate(void);
void swap(void);
void clear(void);

int main(void)
{
  int type;
  double op2;
  char s[MAXOP];

  while ((type = getop(s)) != EOF)
  {
    switch (type)
    {
    case NUMBER:
      push(atof(s));
      break;

    case '+':
      push(pop() + pop());
      break;

    case '-':
      op2 = pop();
      push(pop() - op2);
      break;

    case '*':
      push(pop() * pop());
      break;

    case '/':
      op2 = pop();

      if (op2 != 0.0)
      {
        push(pop() / op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }

      break;

    case '%':
      op2 = pop();

      if (op2 != 0.0)
      {
        push((int)pop() % (int)op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }
      break;

    case 'h':
      view_head();
      break;

    case 'd':
      duplicate();
      break;

    case 's':
      swap();
      break;

    case 'c':
      clear();
      break;

    case '\\n':
      printf("result: %.8g\\n", pop());
      break;

    default:
      printf("Error: unknown command %s.\\n", s);
      break;
    }
  }

  return 0;
}

int sp = 0;
double stack[MAXVAL];

void push(double f)
{
  if (sp < MAXVAL)
  {
    stack[sp++] = f;
  }
  else
  {
    printf("Error: stack full.\\n");
  }
}

double pop(void)
{
  if (sp > 0)
  {
    return stack[--sp];
  }
  else
  {
    printf("Error: stack empty.\\n");
  }

  return 0.0;
}

void view_head(void)
{
  if (sp)
  {
    printf("stack_head: %g\\n", stack[sp - 1]);
  }
  else
  {
    printf("Error: stack empty.\\n");
  }
}

void duplicate(void)
{
  double temp = pop();
  push(temp);
  push(temp);
}

void swap(void)
{
  double temp1 = pop();
  double temp2 = pop();

  push(temp1);
  push(temp2);
}

void clear(void)
{
  while (sp > 0)
  {
    stack[--sp] = 0.0;
  }
}

int bufp = 0;
char buf[BUFFSIZE];

int getch(void)
{
  return (bufp > 0) ? buf[--bufp] : getchar();
}

void ungetch(int c)
{
  if (bufp >= BUFFSIZE)
  {
    printf("ungetch: too many characters\\n");
  }
  else
  {
    buf[bufp++] = c;
  }
}

int getop(char s[])
{
  int i = 0, c;

  while ((s[0] = c = getch()) == ' ' || c == '\\t')
    ;

  s[1] = '\\0';

  if (!isdigit(c) && c != '.' && c != '-')
  {
    return c;
  }

  if (c == '-')
  {
    int next = getch();
    if (next == '\\n' || next == ' ' || next == '\\t')
    {
      ungetch(next);
      return c; // return '-' as operator
    }
    else if (!isdigit(next) && next != '.')
    {
      return next; // not a number
    }
    else // number like "-5", "-.6" etc, next is digit or '.'
    {
      s[++i] = c = next;
    }
  }

  if (isdigit(c))
  {
    while (isdigit(s[++i] = c = getch()))
      ;
  }

  if (c == '.')
  {
    while (isdigit(s[++i] = c = getch()))
      ;
  }

  if (c != EOF)
  {
    ungetch(c);
  }

  return NUMBER;
}
`,
    tags: ["chapter04", "exercise4-4", "kandr", "c-programming"]
  },
  {
    id: 'ex0405',
    title: 'Exercise 4.5: Math',
    displayName: 'Ex 4.5: Math',
    description: 'Math',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <math.h>

#define MAXOP 100
#define MAXVAL 100
#define BUFFSIZE 100
#define NUMBER '0'

int getop(char[]);

void push(double f);
double pop(void);
void view_head(void);
void duplicate(void);
void swap(void);
void clear(void);

int main(void)
{
  int type;
  double op2;
  char s[MAXOP];

  while ((type = getop(s)) != EOF)
  {
    switch (type)
    {
    case NUMBER:
      push(atof(s));
      break;

    case '+':
      push(pop() + pop());
      break;

    case '-':
      op2 = pop();
      push(pop() - op2);
      break;

    case '*':
      push(pop() * pop());
      break;

    case '/':
      op2 = pop();

      if (op2 != 0.0)
      {
        push(pop() / op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }

      break;

    case '%':
      op2 = pop();

      if (op2 != 0.0)
      {
        push((int)pop() % (int)op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }
      break;

    case '^':
      op2 = pop();
      push(pow(pop(), op2));
      break;

    case '~':
      push(sin(pop()));
      break;

    case 'e':
      push(exp(pop()));
      break;

    case 'h':
      view_head();
      break;

    case 'd':
      duplicate();
      break;

    case 's':
      swap();
      break;

    case 'c':
      clear();
      break;

    case '\\n':
      printf("result: %.8g\\n", pop());
      break;

    default:
      printf("Error: unknown command %s.\\n", s);
      break;
    }
  }

  return 0;
}

int sp = 0;
double stack[MAXVAL];

void push(double f)
{
  if (sp < MAXVAL)
  {
    stack[sp++] = f;
  }
  else
  {
    printf("Error: stack full.\\n");
  }
}

double pop(void)
{
  if (sp > 0)
  {
    return stack[--sp];
  }
  else
  {
    printf("Error: stack empty.\\n");
  }

  return 0.0;
}

void view_head(void)
{
  if (sp)
  {
    printf("stack_head: %g\\n", stack[sp - 1]);
  }
  else
  {
    printf("Error: stack empty.\\n");
  }
}

void duplicate(void)
{
  double temp = pop();
  push(temp);
  push(temp);
}

void swap(void)
{
  double temp1 = pop();
  double temp2 = pop();

  push(temp1);
  push(temp2);
}

void clear(void)
{
  do
  {
    stack[sp] = 0.0;
  } while (sp--);
}

int bufp = 0;
char buf[BUFFSIZE];

int getch(void)
{
  return (bufp > 0) ? buf[--bufp] : getchar();
}

void ungetch(int c)
{
  if (bufp >= BUFFSIZE)
  {
    printf("ungetch: too many characters\\n");
  }
  else
  {
    buf[bufp++] = c;
  }
}

int getop(char s[])
{
  int i = 0, c;

  while ((s[0] = c = getch()) == ' ' || c == '\\t')
    ;

  s[1] = '\\0';

  if (!isdigit(c) && c != '.' && c != '-')
  {
    return c;
  }

  if (c == '-')
  {
    int next = getch();
    if (next == '\\n' || next == ' ' || next == '\\t')
    {
      ungetch(next);
      return c; // return '-' as operator
    }
    else if (!isdigit(next) && next != '.')
    {
      return next; // not a number
    }
    else // number like "-5", "-.6" etc, next is digit or '.'
    {
      s[++i] = c = next;
    }
  }
  else
  {
    c = getch();
  }

  if (isdigit(c))
  {
    while (isdigit(s[++i] = c = getch()))
      ;
  }

  if (c == '.')
  {
    while (isdigit(s[++i] = c = getch()))
      ;
  }

  if (c != EOF)
  {
    ungetch(c);
  }

  return NUMBER;
}
`,
    tags: ["chapter04", "exercise4-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0406',
    title: 'Exercise 4.6: Variables',
    displayName: 'Ex 4.6: Variables',
    description: 'Variables',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <math.h>

#define MAXOP 100
#define MAXVAL 100
#define BUFFSIZE 100
#define NUMBER '0'

#define VARSET '_'
#define VARGET 'a'
#define VARNUM 26
char var = '0';

enum boolean
{
  FALSE,
  TRUE
};

int getop(char[]);

void push(double f);
double pop(void);
int is_empty(void);
void view_head(void);
void duplicate(void);
void swap(void);
void clear(void);

int main(void)
{
  int type;
  double op2;
  char s[MAXOP];

  int varindex = 0;
  double var_buff[VARNUM];

  while ((type = getop(s)) != EOF)
  {
    switch (type)
    {
    case NUMBER:
      push(atof(s));
      break;

    case '+':
      push(pop() + pop());
      break;

    case '-':
      op2 = pop();
      push(pop() - op2);
      break;

    case '*':
      push(pop() * pop());
      break;

    case '/':
      op2 = pop();

      if (op2 != 0.0)
      {
        push(pop() / op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }

      break;

    case '%':
      op2 = pop();

      if (op2 != 0.0)
      {
        push((int)pop() % (int)op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }
      break;

    case '^':
      op2 = pop();
      push(pow(pop(), op2));
      break;

    case '~':
      push(sin(pop()));
      break;

    case 'E':
      push(exp(pop()));
      break;

    case 'H':
      view_head();
      break;

    case 'D':
      duplicate();
      break;

    case 'S':
      swap();
      break;

    case 'C':
      clear();
      break;

    case VARSET:
      var_buff[varindex++] = pop();
      printf("variable %c: %.3f\\n", 'a' + varindex - 1, var_buff[varindex - 1]);
      break;

    case VARGET:
      // Check if the variable has been assigned previously
      if (var - 'a' <= (varindex - 1))
      {
        push(var_buff[var - 'a']);
      }
      else
      {
        printf("Error: undefined variable.\\n");
      }
      break;

    case '\\n':
      if (!is_empty())
      {
        printf("result: %.8g\\n", pop());
      }
      break;

    default:
      printf("Error: unknown command %s.\\n", s);
      break;
    }
  }

  return 0;
}

int sp = 0;
double stack[MAXVAL];

void push(double f)
{
  if (sp < MAXVAL)
  {
    stack[sp++] = f;
  }
  else
  {
    printf("Error: stack full.\\n");
  }
}

double pop(void)
{
  if (sp > 0)
  {
    return stack[--sp];
  }
  else
  {
    printf("Error: stack empty.\\n");
  }

  return 0.0;
}

int is_empty(void)
{
  if (sp > 0)
  {
    return FALSE;
  }

  return TRUE;
}

void view_head(void)
{
  if (sp)
  {
    printf("stack_head: %g\\n", stack[sp - 1]);
  }
  else
  {
    printf("Error: stack empty.\\n");
  }
}

void duplicate(void)
{
  double temp = pop();
  push(temp);
  push(temp);
}

void swap(void)
{
  double temp1 = pop();
  double temp2 = pop();

  push(temp1);
  push(temp2);
}

void clear(void)
{
  do
  {
    stack[sp] = 0.0;
  } while (sp--);
}

int bufp = 0;
char buf[BUFFSIZE];

int getch(void)
{
  return (bufp > 0) ? buf[--bufp] : getchar();
}

void ungetch(int c)
{
  if (bufp >= BUFFSIZE)
  {
    printf("ungetch: too many characters\\n");
  }
  else
  {
    buf[bufp++] = c;
  }
}

int getop(char s[])
{
  int i = 0, c;

  while ((s[0] = c = getch()) == ' ' || c == '\\t')
    ;

  s[1] = '\\0';

  if (islower(c))
  {
    var = c;
    return VARGET;
  }

  if (!isdigit(c) && c != '.' && c != '-')
  {
    return c;
  }

  if (c == '-')
  {
    int next = getch();
    if (next == '\\n' || next == ' ' || next == '\\t')
    {
      ungetch(next);
      return c; // return '-' as operator
    }
    else if (!isdigit(next) && next != '.')
    {
      return next; // not a number
    }
    else // number like "-5", "-.6" etc, next is digit or '.'
    {
      s[++i] = c = next;
    }
  }
  else
  {
    c = getch();
  }

  if (isdigit(c))
  {
    while (isdigit(s[++i] = c = getch()))
      ;
  }

  if (c == '.')
  {
    while (isdigit(s[++i] = c = getch()))
      ;
  }

  if (c != EOF)
  {
    ungetch(c);
  }

  return NUMBER;
}
`,
    tags: ["chapter04", "exercise4-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0407',
    title: 'Exercise 4.7: Ungets',
    displayName: 'Ex 4.7: Ungets',
    description: 'Ungets',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>
#include <string.h>

#define MAXLEN 1000
#define BUFFSIZE 1000

int getstr(char line[], int limit);
void ungetstr(char line[]);

int main(void)
{
  char line[MAXLEN];
  char temp[MAXLEN];

  getstr(line, MAXLEN);
  printf("%s", line);

  ungetstr(line);

  getstr(temp, MAXLEN);
  printf("%s", temp);

  return 0;
}

int getch(void);
void ungetch(int c);

int getstr(char line[], int limit)
{
  int i = 0, c;

  while (limit - 1 > 0 && (c = getch()) != EOF && c != '\\n')
  {
    line[i++] = c;
  }

  if (c == '\\n')
  {
    line[i++] = c;
  }

  line[i] = '\\0';

  return i;
}

void ungetstr(char line[])
{
  int i = strlen(line);

  while (i)
  {
    ungetch(line[--i]);
  }
}

int bufp = 0;
char buf[BUFFSIZE];

int getch(void)
{
  return (bufp > 0) ? buf[--bufp] : getchar();
}

void ungetch(int c)
{
  if (bufp >= BUFFSIZE)
  {
    printf("ungetch: too many characters\\n");
  }
  else
  {
    buf[bufp++] = c;
  }
}

// NOTE: The ungetstr() function doesn't need access to buf and bufp. It is enough
// just to use the ungetch() function.
`,
    tags: ["chapter04", "exercise4-7", "kandr", "c-programming"]
  },
  {
    id: 'ex0408',
    title: 'Exercise 4.8: Getch',
    displayName: 'Ex 4.8: Getch',
    description: 'Getch',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>

int getch(void);
void ungetch(int c);

int main(void)
{
  char c = getch();
  printf("%c\\n", c);

  ungetch(c);

  printf("%c\\n", c = getch());

  return 0;
}

int buf = -1;

int getch(void)
{
  char temp;

  if (buf != -1)
  {
    temp = buf;
    buf = -1;

    return temp;
  }

  return getchar();
}

void ungetch(int c)
{
  if (buf != -1)
  {
    printf("ungetch: buffer full\\n");
  }
  else
  {
    buf = c;
  }
}
`,
    tags: ["chapter04", "exercise4-8", "kandr", "c-programming"]
  },
  {
    id: 'ex0409',
    title: 'Exercise 4.9: Getch',
    displayName: 'Ex 4.9: Getch',
    description: 'Getch',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>

#define BUFFSIZE 100

int getch(void);
void ungetch(int c);

int main(void)
{
  int c;

  c = getch();
  putchar(c);

  ungetch(EOF);

  c = getch();
  putchar(c);

  return 0;
}

int bufp = 0;
int buf[BUFFSIZE];

int getch(void)
{
  return (bufp > 0) ? buf[--bufp] : getchar();
}

void ungetch(int c)
{
  if (bufp >= BUFFSIZE)
  {
    printf("ungetch: too many characters\\n");
  }
  else
  {
    buf[bufp++] = c;
  }
}

// NOTE: The getch() function can't manage correctly the EOF character because
// in the original K&R version buf was a char array, which can't hold the EOF
// because EOF is -1 and char can't hold negative number. However the gcc
// compiler, on Windows, uses by default signed chars which can hold EOF, but
// this is not platform independent.
`,
    tags: ["chapter04", "exercise4-9", "kandr", "c-programming"]
  },
  {
    id: 'ex0410',
    title: 'Exercise 4.10: Calculator',
    displayName: 'Ex 4.10: Calculator',
    description: 'Calculator',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <math.h>

#define MAXOP 100
#define MAXVAL 100
#define BUFFSIZE 100
#define MAXLEN 1000
#define NUMBER '0'

#define VARSET '_'
#define VARGET 'a'
#define VARNUM 26

enum boolean
{
  FALSE,
  TRUE
};

int get_line(char line[], unsigned int max_line_len);
int getop(char[]);

void push(double f);
double pop(void);
int is_empty(void);
void view_head(void);
void duplicate(void);
void swap(void);
void clear(void);

char var = '0';
char line[MAXLEN];
int line_i = 0;

int main(void)
{
  int type;
  double op2;
  char s[MAXOP];

  int varindex = 0;
  double var_buff[VARNUM];

  while (get_line(line, MAXLEN) != 0)
  {
    line_i = 0;
    while ((type = getop(s)) != '\\0')
    {
      switch (type)
      {
      case NUMBER:
        push(atof(s));
        break;

      case '+':
        push(pop() + pop());
        break;

      case '-':
        op2 = pop();
        push(pop() - op2);
        break;

      case '*':
        push(pop() * pop());
        break;

      case '/':
        op2 = pop();

        if (op2 != 0.0)
        {
          push(pop() / op2);
        }
        else
        {
          printf("Error: zero divisor.\\n");
        }

        break;

      case '%':
        op2 = pop();

        if (op2 != 0.0)
        {
          push((int)pop() % (int)op2);
        }
        else
        {
          printf("Error: zero divisor.\\n");
        }
        break;

      case '^':
        op2 = pop();
        push(pow(pop(), op2));
        break;

      case '~':
        push(sin(pop()));
        break;

      case 'e':
        push(exp(pop()));
        break;

      case 'h':
        view_head();
        break;

      case 'd':
        duplicate();
        break;

      case 's':
        swap();
        break;

      case 'c':
        clear();
        break;

      case VARSET:
        var_buff[varindex++] = pop();
        printf("variable %c: %.3f\\n", 'a' + varindex - 1, var_buff[varindex - 1]);
        break;

      case VARGET:
        push(var_buff[var - 'a']);
        break;

      case '\\n':
        if (!is_empty())
        {
          printf("result: %.8g\\n", pop());
        }
        break;

      default:
        printf("Error: unknown command %s.\\n", s);
        break;
      }
    }
  }

  return 0;
}

int sp = 0;
double stack[MAXVAL];

void push(double f)
{
  if (sp < MAXVAL)
  {
    stack[sp++] = f;
  }
  else
  {
    printf("Error: stack full.\\n");
  }
}

double pop(void)
{
  if (sp > 0)
  {
    return stack[--sp];
  }
  else
  {
    printf("Error: stack empty.\\n");
  }

  return 0.0;
}

int is_empty(void)
{
  if (sp > 0)
  {
    return FALSE;
  }

  return TRUE;
}

void view_head(void)
{
  if (sp)
  {
    printf("stack_head: %g\\n", stack[sp - 1]);
  }
  else
  {
    printf("Error: stack empty.\\n");
  }
}

void duplicate(void)
{
  double temp = pop();
  push(temp);
  push(temp);
}

void swap(void)
{
  double temp1 = pop();
  double temp2 = pop();

  push(temp1);
  push(temp2);
}

void clear(void)
{
  do
  {
    stack[sp] = 0.0;
  } while (sp--);
}

int get_line(char line[], unsigned int max_line_len)
{
  int c, i;

  for (i = 0; i < max_line_len - 1 && (c = getchar()) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }

  line[i] = '\\0';

  return i;
}

int getop(char s[])
{
  int i = 0, c;

  while ((s[0] = c = line[line_i++]) == ' ' || c == '\\t')
    ;

  s[1] = '\\0';

  if (isalpha(c))
  {
    var = c;
    return VARGET;
  }

  if (!isdigit(c) && c != '.' && c != '-')
  {
    return c;
  }

  if (c == '-')
  {
    int next = line[line_i++];
    if (next == '\\n' || next == ' ' || next == '\\t' || next == '\\0')
    {
      --line_i;
      return '-';
    }
    else if (!isdigit(next) && next != '.') // not a number
    {
      return next;
    }
    else
    {
      s[++i] = c = next;
    }
  }
  else
  {
    c = line[line_i++];
  }

  if (isdigit(c))
  {
    while (isdigit(s[++i] = c = line[line_i++]))
      ;
  }

  if (c == '.')
  {
    while (isdigit(s[++i] = c = line[line_i++]))
      ;
  }

  --line_i;

  return NUMBER;
}
`,
    tags: ["chapter04", "exercise4-10", "kandr", "c-programming"]
  },
  {
    id: 'ex0411',
    title: 'Exercise 4.11: Getop',
    displayName: 'Ex 4.11: Getop',
    description: 'Getop',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#define MAXOP 100
#define MAXVAL 100
#define BUFFSIZE 100
#define NUMBER '0'

int getop(char[]);
void push(double);
double pop(void);

int main(void)
{
  int type;
  double op2;
  char s[MAXOP];

  while ((type = getop(s)) != EOF)
  {
    switch (type)
    {
    case NUMBER:
      push(atof(s));
      break;

    case '+':
      push(pop() + pop());
      break;

    case '-':
      op2 = pop();
      push(pop() - op2);
      break;

    case '*':
      push(pop() * pop());
      break;

    case '/':
      op2 = pop();

      if (op2 != 0.0)
      {
        push(pop() / op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }

      break;

    case '%':
      op2 = pop();

      if (op2 != 0.0)
      {
        push((int)pop() % (int)op2);
      }
      else
      {
        printf("Error: zero divisor.\\n");
      }
      break;

    case '\\n':
      printf("result: %.8g\\n", pop());
      break;

    default:
      printf("Error: unknown command %s.\\n", s);
      break;
    }
  }

  return 0;
}

int sp = 0;
double val[MAXVAL];

void push(double f)
{
  if (sp < MAXVAL)
  {
    val[sp++] = f;
  }
  else
  {
    printf("Error: stack full, can't push %g.\\n", f);
  }
}

double pop(void)
{
  if (sp > 0)
  {
    return val[--sp];
  }
  else
  {
    printf("Error: stack empty.\\n");
    return 0.0;
  }
}

int getop(char s[])
{
  int i = 0, c;
  static int buf = EOF;

  while ((s[0] = c = getchar()) == ' ' || c == '\\t')
    ;

  s[1] = '\\0';

  if (!isdigit(c) && c != '.' && c != '-')
  {
    return c;
  }

  if (c == '-')
  {
    int next = getchar();
    if (!isdigit(next) && next != '.')
    {
      return next;
    }

    s[i] = c;
    c = next = buf;
  }
  else
  {
    c = getchar();
  }

  if (isdigit(c))
  {
    while (isdigit(s[++i] = c = getchar()))
      ;
  }

  if (c == '.')
  {
    while (isdigit(s[++i] = c = getchar()))
      ;
  }

  if (c != EOF)
  {
    buf = c;
  }

  return NUMBER;
}
`,
    tags: ["chapter04", "exercise4-11", "kandr", "c-programming"]
  },
  {
    id: 'ex0412',
    title: 'Exercise 4.12: Itoa',
    displayName: 'Ex 4.12: Itoa',
    description: 'Itoa',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>

#define MAXLEN 100

void int_to_array(int n, char str[]);

int main(void)
{
  int n = -1234;
  char str[MAXLEN];

  int_to_array(n, str);
  printf("%s\\n", str);

  n = -7676;

  int_to_array(n, str);
  printf("%s", str);

  return 0;
}

void int_to_array(int n, char str[])
{
  static int i = 0;

  if (n)
  {
    if(n < 0){
      i = 0;
      str[i++] = '-';
      n *= -1;
    }

    int d = n % 10;
    n /= 10;


    int_to_array(n, str);
 

    str[i++] = d + '0';
    str[i] = '\\0';
  }
}
`,
    tags: ["chapter04", "exercise4-12", "kandr", "c-programming"]
  },
  {
    id: 'ex0413',
    title: 'Exercise 4.13: Reverse',
    displayName: 'Ex 4.13: Reverse',
    description: 'Reverse',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>

#define MAXLEN 100

void reverse(char str[]);

int main(void)
{
  char str[MAXLEN] = "This is just a string";

  printf("%s\\n", str);
  reverse(str);
  printf("%s\\n", str);

  return 0;
}

void reverse(char str[])
{
  static int i = 0;
  static int j = 0;

  if (str[i] != '\\0')
  {
    char c = str[i++];
    reverse(str);

    str[j++] = c;
  }

  // if whole reverse process is complete, reset the static variables to make this function reusable
  if (str[j] == '\\0')
  {
    i = 0;
    j = 0;
  }
}

// NOTE: As a simple observation when recursive functions are used, static
// variables become handy to construct some useful functionalities.
`,
    tags: ["chapter04", "exercise4-13", "kandr", "c-programming"]
  },
  {
    id: 'ex0414',
    title: 'Exercise 4.14: Swap',
    displayName: 'Ex 4.14: Swap',
    description: 'Swap',
    chapter: '04',
    category: 'K&R - Chapter 4',
    cCode: `#include <stdio.h>

#define swap(t, x, y) \\
  {                   \\
    t temp;           \\
    temp = x;         \\
    x = y;            \\
    y = temp;         \\
  };

int main(void)
{
  int x = 2, y = 3;

  printf("x: %d, y: %d\\n", x, y);

  swap(int, x, y);
  printf("x: %d, y: %d\\n", x, y);

  return 0;
}

// NOTE: A use of a block is very useful because there can be created local
// variables that don't create conflicts with already existed entities.
`,
    tags: ["chapter04", "exercise4-14", "kandr", "c-programming"]
  },
  {
    id: 'ex0501',
    title: 'Exercise 5.1: Getint',
    displayName: 'Ex 5.1: Getint',
    description: 'Getint',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <ctype.h>

#define MAXLEN 1000
#define BUFFSIZE 100

void printbuf(void);
int getch(void);
void ungetch(int c);
int getint(int *pn);

int main(void)
{
  int number = 0;

  getint(&number);
  printf("%d\\n", number);

  printbuf();

  return 0;
}

int bufp = 0;
int buf[BUFFSIZE];

void printbuf(void)
{
  if (bufp)
  {
    printf("Buffer: [ ");

    int i;
    for (i = bufp - 1; i >= 0; --i)
    {
      if (i)
      {
        printf("'%c', ", buf[i] != '\\n' ? buf[i] : '.');
      }
      else
      {
        printf("'%c' ", buf[i] != '\\n' ? buf[i] : '.');
      }
    }

    printf("]\\n");
  }
}

int getch(void)
{
  return (bufp > 0) ? buf[--bufp] : getchar();
}

void ungetch(int c)
{
  if (bufp >= BUFFSIZE)
  {
    printf("ungetch: too many characters\\n");
  }
  else
  {
    buf[bufp++] = c;
  }
}

int getint(int *pn)
{
  int c, sign;

  while (isspace(c = getch()))
    ;

  if (!isdigit(c) && c != EOF && c != '+' && c != '-')
  {
    ungetch(c);
    return 0;
  }

  sign = (c == '-') ? -1 : 1;

  if (c == '+' || c == '-')
  {
    if (!isdigit(c = getch()))
    {
      ungetch(c);
      ungetch(sign == 1 ? '+' : '-');
      return 0;
    }
  }

  for (*pn = 0; isdigit(c); c = getch())
  {
    *pn = 10 * *pn + (c - '0');
  }

  *pn = *pn * sign;

  if (c != EOF)
  {
    ungetch(c);
  }

  return c;
}
`,
    tags: ["chapter05", "exercise5-1", "kandr", "c-programming"]
  },
  {
    id: 'ex0502',
    title: 'Exercise 5.2: Getfloat',
    displayName: 'Ex 5.2: Getfloat',
    description: 'Getfloat',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <ctype.h>
#include <math.h>

#define MAXLEN 1000
#define BUFFSIZE 100

int getch(void);
void ungetch(int c);
int getfloat(float *pn);

int main(void)
{
  float number = 0.0;

  getfloat(&number);
  printf("number: %f\\n", number);

  return 0;
}

int bufp = 0;
int buf[BUFFSIZE];

int getch(void)
{
  return (bufp > 0) ? buf[--bufp] : getchar();
}

void ungetch(int c)
{
  if (bufp >= BUFFSIZE)
  {
    printf("ungetch: too many characters\\n");
  }
  else
  {
    buf[bufp++] = c;
  }
}

int getfloat(float *pn)
{
  int c, sign;

  while (isspace(c = getch()))
    ;

  if (!isdigit(c) && c != EOF && c != '+' && c != '-' && c != '.')
  {
    ungetch(c);
    return 0;
  }

  sign = (c == '-') ? -1 : 1;

  if (c == '+' || c == '-')
  {
    if (!isdigit(c = getch()))
    {
      ungetch(c);
      ungetch(sign == 1 ? '+' : '-');
      return 0;
    }
  }

  for (*pn = 0; isdigit(c); c = getch())
  {
    *pn = 10 * *pn + (c - '0');
  }

  if (c == '.')
  {
    int i;
    for (i = 1; (c = getch()) && isdigit(c); ++i)
    {
      *pn += (c - '0') / (pow(10, i));
    }
  }

  *pn = *pn * sign;

  if (c != EOF)
  {
    ungetch(c);
  }

  return c;
}

// NOTE: The getfloat() function should return an integer like getint().
`,
    tags: ["chapter05", "exercise5-2", "kandr", "c-programming"]
  },
  {
    id: 'ex0503',
    title: 'Exercise 5.3: Strcat',
    displayName: 'Ex 5.3: Strcat',
    description: 'Strcat',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>

void strcat_ptr(char *s, char *t);

int main(void)
{
  char s[100] = "This is the first string";
  char t[] = ", this second string!";

  strcat_ptr(s, t);

  puts(s);

  return 0;
}

// Concatenate t to end of s; s must be big enough.
void strcat_ptr(char *s, char *t)
{
  // Find the end of s
  while (*s)
      ++s;

  // copy t to the end of s
  while (*s++ = *t++)
    ;
}
`,
    tags: ["chapter05", "exercise5-3", "kandr", "c-programming"]
  },
  {
    id: 'ex0504',
    title: 'Exercise 5.4: Strend',
    displayName: 'Ex 5.4: Strend',
    description: 'Strend',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <string.h>

int strend(char *s, char *t);

int main(void)
{
  char *s = "This si a simple string";
  char *t1 = "string";
  char *t2 = "random string";

  // Test if the string t1 occurs at the end of string s.
  if (strend(s, t1))
    puts("The string t1 orrurs at the end of the string s.");
  else
    puts("The string t1 doesn't orrur at the end of the string s.");

  // Test if the string t2 occurs at the end of string s.
  if (strend(s, t2))
    puts("The string t2 orrurs at the end of the string s.");
  else
    puts("The string t2 doesn't orrur at the end of the string s.");

  return 0;
}

//  Returns 1 if the string t occurs at the end of the string s, and zero otherwise.
int strend(char *s, char *t)
{
  // Determine the lengths of the strings.
  size_t s_length = strlen(s);
  size_t t_length = strlen(t);

  // Move the s & t pointer to the end of the corresponding strings.
  s += s_length - 1;
  t += t_length - 1;

  // Check backwards if each character from string t occurs in the corresonding
  // location from the string s.
  while (*s-- == *t--)
    --t_length;

  return !t_length;
}
`,
    tags: ["chapter05", "exercise5-4", "kandr", "c-programming"]
  },
  {
    id: 'ex0505',
    title: 'Exercise 5.5: Strncat',
    displayName: 'Ex 5.5: Strncat',
    description: 'Strncat',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <string.h>

void strcat_ptr(char *s, char *t, size_t n);

int main(void)
{
  char s[100] = "This is the first string";
  char *t = ", this second string!";
  size_t nr_chars = 5;

  strcat_ptr(s, t, nr_chars);

  puts(s);

  return 0;
}

// Concatenate t to end of s; s must be big enough.
void strcat_ptr(char *s, char *t, size_t n)
{
  // Find the end of s
  size_t s_length = strlen(s);

  // Move the s pointer to the end of the s string.
  s += s_length;

  // copy t to the end of s
  while ((*s++ = *t++) != '\\0' && n--)
    ;
}
`,
    tags: ["chapter05", "exercise5-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0505',
    title: 'Exercise 5.5: Strncmp',
    displayName: 'Ex 5.5: Strncmp',
    description: 'Strncmp',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>

int strcmp_ptr(char *s, char *t, size_t n);

int main(void)
{
  char s[100] = "This is the first string";
  char *t = "This is the second string";
  size_t nr_chars = 13;

  int is_equal = strcmp_ptr(s, t, nr_chars);

  if (is_equal == 0)
  {
    puts("String s is equal with string t.");
  }
  else if (is_equal > 0)
  {
    puts("String s contains more chars than string t.");
  }
  else if (is_equal < 0)
  {
    puts("String s contains less chars than string t.");
  }

  return 0;
}

// Return <0 if s<t, 0 if s==t, >0 if s>t *1
int strcmp_ptr(char *s, char *t, size_t n)
{
  while ((*s == *t) && --n)
  {
    if (*s == '\\0')
      return 0;

    ++s;
    ++t;
  }

  // If the s string contains more characters than t, then the t char will
  // become '\\0' before s char. If this happen then the s char will be its ascii value and
  // t char will be 0, so the final result will be s_ascii_value - 0.

  // If the t string contains more character than s, then the s char will
  // become '\\0' before t char. If this happen then the s char will be 0 and
  // t char will be whatever ascii_value is holding, so the final result will be 0 - t_ascii_value.

  return *s - *t;
}
`,
    tags: ["chapter05", "exercise5-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0505',
    title: 'Exercise 5.5: Strncpy',
    displayName: 'Ex 5.5: Strncpy',
    description: 'Strncpy',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>

void strcpy_ptr(char *s, char *t, size_t n);

int main(void)
{
  char s[100] = "This is the first string";
  char *t = "Test is the second string, that is cool";
  size_t nr_chars = 26;

  strcpy_ptr(s, t, nr_chars);

  puts(s);

  return 0;
}

void strcpy_ptr(char *s, char *t, size_t n)
{
  while ((*s++ = *t++) && --n)
    ;
  ;
}
`,
    tags: ["chapter05", "exercise5-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0506',
    title: 'Exercise 5.6: Atoi',
    displayName: 'Ex 5.6: Atoi',
    description: 'Atoi',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>

int atoi(const char *s);

int main(void)
{
  int i;
  char *s = "12s3a";

  i = atoi(s);

  printf("atoi: %d", i);

  return 0;
}

int atoi(const char *s)
{
  int i = 0;

  while (*s != '\\0' && *s > '0' && *s < '9')
  {
    i = i * 10 + *s - '0';
    ++s;
  }

  return i;
}
`,
    tags: ["chapter05", "exercise5-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0506',
    title: 'Exercise 5.6: Getline',
    displayName: 'Ex 5.6: Getline',
    description: 'Getline',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>

void get_line(char *s);

int main(void)
{
  char string[150] = "";

  get_line(string);
  puts(string);

  return 0;
}

void get_line(char *s)
{
  while ((*s = getchar()) != EOF && (*s != '\\n'))
  {
    ++s;
  }

  *s = '\\0';
}
`,
    tags: ["chapter05", "exercise5-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0506',
    title: 'Exercise 5.6: Getop',
    displayName: 'Ex 5.6: Getop',
    description: 'Getop',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <ctype.h>

#define NUMBER 0

int getop(char *s);

int main(void)
{
  char s[100] = "";

  int type = getop(s);

  printf("%d ", type);
  puts(s);

  return 0;
}

int getop(char *s)
{
  char c;

  // Skip blanks (spaces and tabs)
  while ((*s = c = getchar()) == ' ' || c == '\\t')
    ;

  *(s + 1) = '\\0';

  // Not a number
  if (!isdigit(c) && c != '.')
    return c;

  // Collect the integer part
  if (isdigit(c) && c != '.')
    while (isdigit(*(++s) = c = getchar()))
      ;

  // Collect the fraction part
  if (c == '.')
  {
    while (isdigit(*(++s) = c = getchar()))
      ;
  }

  if (c != EOF)
    ungetc(c, stdin);

  *s = '\\0';

  return NUMBER;
}
`,
    tags: ["chapter05", "exercise5-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0506',
    title: 'Exercise 5.6: Itoa',
    displayName: 'Ex 5.6: Itoa',
    description: 'Itoa',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <string.h>

void reverse(char *s);
void itoa(char *s, int n);

int main(void)
{
  int i = 1234;
  char s[100] = "";

  itoa(s, i);

  printf("itoa: %s\\n", s);

  return 0;
}

void reverse(char *s)
{
  char *t = s + strlen(s) - 1;
  char aux = 0;

  if (*s == '\\0')
    return;

  while (s < t)
  {
    aux = *t;
    *t-- = *s;
    *s++ = aux;
  }
}

void itoa(char *s, int n)
{
  char *t = s;

  while (n)
  {
    *(t++) = n % 10 + '0';
    n /= 10;
  }

  *t = '\\0';

  reverse(s);
}
`,
    tags: ["chapter05", "exercise5-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0506',
    title: 'Exercise 5.6: Reverse',
    displayName: 'Ex 5.6: Reverse',
    description: 'Reverse',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <string.h>

void reverse(char *s);

int main(void)
{
  char s[100] = "test";

  reverse(s);
  puts(s);

  return 0;
}

void reverse(char *s)
{
  char *t = s + strlen(s) - 1;
  char aux = 0;

  if (*s == '\\0')
    return;

  while (s < t)
  {
    aux = *t;
    *t-- = *s;
    *s++ = aux;
  }
}
`,
    tags: ["chapter05", "exercise5-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0506',
    title: 'Exercise 5.6: Strindex',
    displayName: 'Ex 5.6: Strindex',
    description: 'Strindex',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>

int strindex(char *s, char *t);

int main(void)
{
  char s[] = "this is first string";
  char t[] = "this";

  printf("%d", strindex(s, t));

  return 0;
}

int strindex(char *s, char *t)
{
  char *first;
  char *second;
  int pos = 0;

  while (*s != '\\0')
  {
    if (*s == *t)
    {
      first = s;
      second = t;

      while (*first++ == *second++)
      {
        if (*second == '\\0')
          return pos;
      }
    }
    pos++;
    s++;
  }

  return -1;
}
`,
    tags: ["chapter05", "exercise5-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0507',
    title: 'Exercise 5.7: Readlines',
    displayName: 'Ex 5.7: Readlines',
    description: 'Readlines',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXLINES 5000 // max # of lines to be sorted
#define MAXLEN 1000
#define MAXSTORE 10000 // max # of chars from all lines to be stored

char *line_ptr[MAXLINES]; // pointers to text lines

size_t get_line(char line[], size_t max_line_len);

int readlines(char *line_ptr[], int max_nr_of_lines, char *stored_lines);
void writelines(char *line_ptr[], int nr_of_lines);

void swap(char *v[], int i, int j);
void quick_sort(char *line_ptr[], int left, int right);

int main()
{
  int nr_of_lines;             // # of input lines read
  char stored_lines[MAXSTORE]; // # of chars to be stored for all lines

  if ((nr_of_lines = readlines(line_ptr, MAXLINES, stored_lines)) >= 0)
  {
    quick_sort(line_ptr, 0, nr_of_lines - 1);
    printf("-----\\n");
    writelines(line_ptr, nr_of_lines);
    return 0;
  }
  else
  {
    printf("Error: input too big to sort.\\n");
    return 1;
  }
}

int readlines(char *line_ptr[], int max_nr_of_lines, char *stored_lines)
{
  int len;
  int nr_of_lines;

  char *p = stored_lines + strlen(stored_lines); // Init p with the first empty position from stored_lines
  char line[MAXLEN];

  nr_of_lines = 0;
  while ((len = get_line(line, MAXLEN)) > 0)
  {
    // Checking if the current # of lines exceeds the max # of lines that can be stored
    // Also checking if the max # of chars from the stored_lines buffer is not exceeded
    if (nr_of_lines >= max_nr_of_lines || stored_lines + MAXSTORE - p < len)
    {
      return -1;
    }
    else
    {
      line[len - 1] = '\\0'; // Delete newline
      strcpy(p, line);
      line_ptr[nr_of_lines++] = p;
      p += len; // Move p to the next empty position
    }
  }

  return nr_of_lines;
}

void writelines(char *line_ptr[], int nr_of_lines)
{
  while (nr_of_lines-- > 0)
  {
    printf("%s\\n", *line_ptr++);
  }
}

size_t get_line(char line[], size_t max_line_len)
{
  int c;
  size_t i;

  for (i = 0; i < max_line_len - 1 && (c = getc(stdin)) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }

  line[i] = '\\0';

  return i;
}

void quick_sort(char *v[], int left, int right)
{
  int i;
  int last;

  // Do nothing if the array contains less than 2 elements
  if (left >= right)
  {
    return;
  }

  swap(v, left, (left + right) / 2);
  last = left;

  for (i = left + 1; i <= right; ++i)
  {
    if (strcmp(v[i], v[left]) < 0)
    {
      swap(v, ++last, i);
    }
  }

  swap(v, left, last);
  quick_sort(v, left, last - 1);
  quick_sort(v, last + 1, right);
}

void swap(char *v[], int i, int j)
{
  char *temp;

  temp = v[i];
  v[i] = v[j];
  v[j] = temp;
}
`,
    tags: ["chapter05", "exercise5-7", "kandr", "c-programming"]
  },
  {
    id: 'ex0508',
    title: 'Exercise 5.8: Date Conversion',
    displayName: 'Ex 5.8: Date Conversion',
    description: 'Date Conversion',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>

static char daytab[2][13] = {{0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31},
                             {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}};

int day_of_year(int year, int month, int day);
void month_day(int year, int yearday, int *pmonth, int *pda);

int main(void)
{
  int day = day_of_year(2020, 10, 30);
  printf("day of the year: %d\\n", day);

  int month_invalid = day_of_year(2020, 13, 1);
  if (month_invalid == -1)
  {
    printf("Warning: invalid month detected.\\n");
  }

  int day_invalid = day_of_year(202, 12, 32);
  if (day_invalid == -2)
  {
    printf("Warning: invalid day detected.\\n");
  }

  int month;
  int day_month;

  month_day(2020, 304, &month, &day_month);
  printf("month: %d, day: %d\\n", month, day_month);

  month_day(2020, 366, &month, &day_month);
  printf("month: %d, day: %d\\n", month, day_month);

  month_day(2020, 367, &month, &day_month);
  printf("month: %d, day: %d\\n", month, day_month);

  return 0;
}

int day_of_year(int year, int month, int day)
{
  int leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  // Additional checks for month.
  if (month > 12)
  {
    printf("Error: a year has 12 months, so please choose a number betweeen 1 and 12.\\n");
    return -1;
  }

  // Additional checks for day.
  if (day > daytab[leap][month])
  {
    printf("Error: the %d month has a maximum of %d days.\\n", month, daytab[leap][month]);
    return -2;
  }

  int i;
  for (i = 1; i < month; i++)
  {
    day += daytab[leap][i];
  }

  return day;
}

void month_day(int year, int yearday, int *pmonth, int *pda)
{
  int leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  // Additional check for yearday.
  if ((!leap && yearday > 365) || (leap && yearday > 366))
  {
    // Reset the provided month and day.
    *pmonth = 0;
    *pda = 0;
    printf("Error: year %d has %d days.\\n", year, leap ? 366 : 365);

    return;
  }

  int i;
  for (i = 0; yearday > daytab[leap][i]; i++)
  {
    yearday -= daytab[leap][i];
  }

  *pmonth = i;
  *pda = yearday;
}
`,
    tags: ["chapter05", "exercise5-8", "kandr", "c-programming"]
  },
  {
    id: 'ex0509',
    title: 'Exercise 5.9: Date Conversion Pointers',
    displayName: 'Ex 5.9: Date Conversion Pointers',
    description: 'Date Conversion Pointers',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>

static char year_month_days[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
static char leap_year_month_days[] = {0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

static char *daytab[2] = {year_month_days, leap_year_month_days};

int day_of_year(int year, int month, int day);
void month_day(int year, int yearday, int *pmonth, int *pda);

int main(void)
{
  int day = day_of_year(2021, 2, 12);
  printf("day of the year: %d\\n", day);

  int month_invalid = day_of_year(2021, 13, 1);
  if (month_invalid == -1)
  {
    printf("Warning: invalid month detected.\\n");
  }

  int day_invalid = day_of_year(2021, 12, 32);
  if (day_invalid == -2)
  {
    printf("Warning: invalid day detected.\\n");
  }

  int month;
  int day_month;

  month_day(2021, 43, &month, &day_month);
  printf("month: %d, day: %d\\n", month, day_month);

  month_day(2021, 365, &month, &day_month);
  printf("month: %d, day: %d\\n", month, day_month);

  month_day(2021, 366, &month, &day_month);
  printf("month: %d, day: %d\\n", month, day_month);

  return 0;
}

int day_of_year(int year, int month, int day)
{
  int leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  // Additional checks for month.
  if (month > 12)
  {
    printf("Error: a year has 12 months, so please choose a number betweeen 1 and 12.\\n");
    return -1;
  }

  // Additional checks for day.
  if (day > daytab[leap][month])
  {
    printf("Error: the %d month has a maximum of %d days.\\n", month, daytab[leap][month]);
    return -2;
  }

  int i;
  for (i = 1; i < month; i++)
  {
    day += daytab[leap][i];
  }

  return day;
}

void month_day(int year, int yearday, int *pmonth, int *pda)
{
  int leap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  // Additional check for yearday.
  if ((!leap && yearday > 365) || (leap && yearday > 366))
  {
    // Reset the provided month and day.
    *pmonth = 0;
    *pda = 0;
    printf("Error: year %d has %d days.\\n", year, leap ? 366 : 365);

    return;
  }

  int i;
  for (i = 0; yearday > daytab[leap][i]; i++)
  {
    yearday -= daytab[leap][i];
  }

  *pmonth = i;
  *pda = yearday;
}
`,
    tags: ["chapter05", "exercise5-9", "kandr", "c-programming"]
  },
  {
    id: 'ex0510',
    title: 'Exercise 5.10: Expr',
    displayName: 'Ex 5.10: Expr',
    description: 'Expr',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

#define STACK_SIZE 15

unsigned char stack_pointer = 0;
float stack[STACK_SIZE];

float pop(void);
void push(float element);

int main(int argc, char *argv[])
{
  char Error = 0;

  for (size_t i = 1; i < argc; ++i)
  {
    float number = atof(argv[i]);

    if (number || strcmp(argv[i], "0") == 0)
    {
      push(number);
    }
    else if (strlen(argv[i]) == 1)
    {
      if (stack_pointer >= 2 && stack_pointer < STACK_SIZE)
      {
        float number2 = pop();
        float number1 = pop();

        char op = *argv[i];
        switch (op)
        {
        case '+':
          push(number1 + number2);
          break;

        case '-':
          push(number1 - number2);
          break;

        case '*': // This char might require to be escaped when passed as an argument.
          push(number1 * number2);
          break;

        case '/':
          if (number2 == 0)
          {
            Error = 4;
          }
          else
          {
            push(number1 / number2);
          }
          break;

        default:
          Error = 3;
          break;
        }
      }
      else
      {
        Error = 2;
      }
    }
    else
    {
      Error = 1;
    }
  }

  if (Error)
  {
    switch (Error)
    {
    case 1:
      printf("Error: arguments should be numbers or one of the following mathematical operations: '+', '-', '*', '/'.\\n");
      break;

    case 2:
      printf("Error: too many or too few arguments.\\n");
      break;

    case 3:
      printf("Error: invalid operation. use one of the following mathematical operations: '+', '-', '*', '/'.\\n");
      break;

    case 4:
      printf("Error: division by zero (NaN).\\n");
      break;

    default:
      break;
    }

    return EXIT_FAILURE;
  }

  printf("result: %.3f", pop());

  return EXIT_SUCCESS;
}

float pop(void)
{
  if (stack_pointer > 0)
  {
    return stack[stack_pointer--];
  }

  printf("Error: the stack is empty.\\n");
  return 0;
}

void push(float element)
{
  if (stack_pointer < STACK_SIZE)
  {
    stack[++stack_pointer] = element;
  }
  else
  {
    printf("Error: the stack is full.\\n");
  }
}
`,
    tags: ["chapter05", "exercise5-10", "kandr", "c-programming"]
  },
  {
    id: 'ex0511',
    title: 'Exercise 5.11: Detab',
    displayName: 'Ex 5.11: Detab',
    description: 'Detab',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define DEFAULT_TAB_LENGTH 8

int is_str_uint(char *str);
int is_tab_stop_arg_list_valid(int argc, char *argv[]);

int main(int argc, char *argv[])
{
  if (!is_tab_stop_arg_list_valid(argc, argv))
  {
    puts("Error: invalid tab stop list.\\n");
    return EXIT_FAILURE;
  }

  int c;
  size_t arg_pos = 1;
  size_t line_pos = 0;
  size_t tab_stop = DEFAULT_TAB_LENGTH;
  size_t nr_of_spaces;
  size_t nr_of_custom_tab_stops = argc - 1;

  while ((c = getchar()) != EOF)
  {
    if (c == '\\t')
    {
      if (nr_of_custom_tab_stops)
      {
        tab_stop = atoi(argv[arg_pos++]);
        --nr_of_custom_tab_stops;
      }
      else if (argc > 1)
      {
        tab_stop = 1;
      }

      nr_of_spaces = tab_stop - line_pos % tab_stop;

      while (nr_of_spaces)
      {
        putchar(' ');
        ++line_pos;
        --nr_of_spaces;
      }
    }
    else
    {
      putchar(c);
      ++line_pos;

      if (c == '\\n')
      {
        arg_pos = 1;
        line_pos = 0;
        nr_of_custom_tab_stops = argc - 1;
      }
    }
  }

  return EXIT_SUCCESS;
}

int is_str_uint(char *str)
{
  for (size_t i = 0; i < strlen(str); ++i)
  {
    if (!isdigit(str[i]))
    {
      return 0;
    }
  }
  return 1;
}

int is_tab_stop_arg_list_valid(int argc, char *argv[])
{
  for (size_t i = 1; i < argc; ++i)
  {
    if (!is_str_uint(argv[i]) || (i > 1 && atoi(argv[i - 1]) > atoi(argv[i])))
    {
      return 0;
    }
  }
  return 1;
}

// NOTE: The current program works in a similar fashion as expand.
// run: ./detab 4 8 12 16 < file_tabs.txt > file_spaces.txt
`,
    tags: ["chapter05", "exercise5-11", "kandr", "c-programming"]
  },
  {
    id: 'ex0511',
    title: 'Exercise 5.11: Entab',
    displayName: 'Ex 5.11: Entab',
    description: 'Entab',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define DEFAULT_TAB_LENGTH 8

int is_str_uint(char *str);
int is_tab_stop_arg_list_valid(int argc, char *argv[]);

int main(int argc, char *argv[])
{
  if (!is_tab_stop_arg_list_valid(argc, argv))
  {
    puts("Error: invalid tab stop list.\\n");
    return EXIT_FAILURE;
  }

  int c;
  size_t arg_pos = 1;
  size_t line_pos = 0;
  size_t tab_stop = DEFAULT_TAB_LENGTH;
  size_t nr_of_spaces = 0;
  size_t nr_of_custom_tab_stops = argc - 1;

  while ((c = getchar()) != EOF)
  {
    ++line_pos;

    if (c == ' ')
    {
      ++nr_of_spaces;

      if (nr_of_custom_tab_stops)
      {
        tab_stop = atoi(argv[arg_pos]);
      }
      else if (argc > 1)
      {
        tab_stop = 1;
      }

      if (line_pos % tab_stop == 0 && nr_of_spaces > 1)
      {
        putchar('\\t');

        if (nr_of_custom_tab_stops)
        {
          ++arg_pos;
          --nr_of_custom_tab_stops;
        }

        nr_of_spaces = 0;
      }
    }
    else
    {
      while (nr_of_spaces)
      {
        putchar(' ');
        --nr_of_spaces;
      }

      if (c == '\\n')
      {
        arg_pos = 1;
        line_pos = 0;
        nr_of_custom_tab_stops = argc - 1;
      }

      putchar(c);
    }
  }

  return EXIT_SUCCESS;
}

int is_str_uint(char *str)
{
  for (size_t i = 0; i < strlen(str); ++i)
  {
    if (!isdigit(str[i]))
    {
      return 0;
    }
  }
  return 1;
}

int is_tab_stop_arg_list_valid(int argc, char *argv[])
{
  for (size_t i = 1; i < argc; ++i)
  {
    if (!is_str_uint(argv[i]) || (i > 1 && atoi(argv[i - 1]) > atoi(argv[i])))
    {
      return 0;
    }
  }
  return 1;
}

// NOTE: The current program works in a similar fashion as unexpand.
// run: ./entab 4 8 12 16 > file_tabs.txt < file_spaces.txt
`,
    tags: ["chapter05", "exercise5-11", "kandr", "c-programming"]
  },
  {
    id: 'ex0512',
    title: 'Exercise 5.12: Detab',
    displayName: 'Ex 5.12: Detab',
    description: 'Detab',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define DEFAULT_TAB_LENGTH 8

int is_str_uint(char *str);
int is_arg_list_valid(int argc, char *argv[]);

int main(int argc, char *argv[])
{
  if (!is_arg_list_valid(argc, argv))
  {
    puts("Error: invalid arguments.\\n");
    return EXIT_FAILURE;
  }

  int c;
  size_t arg_pos = 1;
  size_t line_pos = 0;
  size_t tab_stop = DEFAULT_TAB_LENGTH;
  size_t nr_of_spaces;
  size_t nr_of_custom_tab_stops;
  size_t initial_nr_of_custom_tab_stops = argc - 1;

  size_t custom_tab_stop = 0;
  size_t custom_line_pos_start = 0;

  for (size_t i = 1; i < argc; i++)
  {
    if (argv[i][0] == '-')
    {
      custom_line_pos_start = atoi(argv[i] + 1);
      --initial_nr_of_custom_tab_stops;
    }
    else if (argv[i][0] == '+')
    {
      custom_tab_stop = atoi(argv[i] + 1);
      --initial_nr_of_custom_tab_stops;
    }
  }

  nr_of_custom_tab_stops = initial_nr_of_custom_tab_stops;

  while ((c = getchar()) != EOF)
  {
    if (c == '\\t')
    {
      if (nr_of_custom_tab_stops)
      {
        tab_stop = atoi(argv[arg_pos++]);
        --nr_of_custom_tab_stops;
      }
      else if (custom_tab_stop)
      {
        tab_stop = custom_tab_stop;
      }
      else if (initial_nr_of_custom_tab_stops)
      {
        tab_stop = 1;
      }

      if (custom_line_pos_start)
      {
        if (line_pos >= custom_line_pos_start)
        {
          nr_of_spaces = tab_stop;
        }
        else
        {
          nr_of_spaces = 1;
        }
      }
      else
      {
        nr_of_spaces = tab_stop - line_pos % tab_stop;
      }

      while (nr_of_spaces)
      {
        putchar(' ');
        ++line_pos;
        --nr_of_spaces;
      }
    }
    else
    {
      putchar(c);
      ++line_pos;

      if (c == '\\n')
      {
        arg_pos = 1;
        line_pos = 0;
        nr_of_custom_tab_stops = initial_nr_of_custom_tab_stops;
      }
    }
  }

  return EXIT_SUCCESS;
}

int is_str_uint(char *str)
{
  for (size_t i = 0; i < strlen(str); ++i)
  {
    if (!isdigit(str[i]))
    {
      return 0;
    }
  }
  return 1;
}

int is_arg_list_valid(int argc, char *argv[])
{
  for (size_t i = 1; i < argc; ++i)
  {
    if (argv[i][0] == '-' || argv[i][0] == '+')
    {
      if (argc > 3 || !is_str_uint(argv[i] + 1))
      {
        return 0;
      }
      continue;
    }

    if (!is_str_uint(argv[i]) || (i > 1 && atoi(argv[i - 1]) > atoi(argv[i])))
    {
      return 0;
    }
  }
  return 1;
}

// NOTE: The current program works in a similar fashion as expand.
// run: ./detab 4 8 12 16 < file_tabs.txt > file_spaces.txt
// run: ./detab +8 -2 < file_tabs.txt > file_spaces.txt
`,
    tags: ["chapter05", "exercise5-12", "kandr", "c-programming"]
  },
  {
    id: 'ex0512',
    title: 'Exercise 5.12: Entab',
    displayName: 'Ex 5.12: Entab',
    description: 'Entab',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define DEFAULT_TAB_LENGTH 8

int is_str_uint(char *str);
int is_arg_list_valid(int argc, char *argv[]);

int main(int argc, char *argv[])
{
  if (!is_arg_list_valid(argc, argv))
  {
    puts("Error: invalid arguments.\\n");
    return EXIT_FAILURE;
  }

  int c;
  size_t arg_pos = 1;
  size_t line_pos = 0;
  size_t tab_stop = DEFAULT_TAB_LENGTH;
  size_t nr_of_spaces = 0;
  size_t nr_of_custom_tab_stops;
  size_t initial_nr_of_custom_tab_stops = argc - 1;

  size_t custom_tab_stop = 0;
  size_t custom_line_pos_start = 0;

  for (size_t i = 1; i < argc; i++)
  {
    if (argv[i][0] == '-')
    {
      custom_line_pos_start = atoi(argv[i] + 1);
      --initial_nr_of_custom_tab_stops;
    }
    else if (argv[i][0] == '+')
    {
      custom_tab_stop = atoi(argv[i] + 1);
      --initial_nr_of_custom_tab_stops;
    }
  }

  nr_of_custom_tab_stops = initial_nr_of_custom_tab_stops;

  while ((c = getchar()) != EOF)
  {
    ++line_pos;

    if (c == ' ')
    {
      ++nr_of_spaces;

      if (nr_of_custom_tab_stops)
      {
        tab_stop = atoi(argv[arg_pos]);
      }
      else if (custom_tab_stop)
      {
        tab_stop = custom_tab_stop;
      }
      else if (initial_nr_of_custom_tab_stops)
      {
        tab_stop = 1;
      }

      if ((!custom_line_pos_start && line_pos % tab_stop == 0 && nr_of_spaces > 1) ||
          (custom_line_pos_start && nr_of_spaces == tab_stop) ||
          line_pos <= custom_line_pos_start)
      {
        putchar('\\t');

        if (nr_of_custom_tab_stops)
        {
          ++arg_pos;
          --nr_of_custom_tab_stops;
        }

        nr_of_spaces = 0;
      }
    }
    else
    {
      while (nr_of_spaces)
      {
        putchar(' ');
        --nr_of_spaces;
      }

      if (c == '\\n')
      {
        arg_pos = 1;
        line_pos = 0;
        nr_of_custom_tab_stops = initial_nr_of_custom_tab_stops;
      }

      putchar(c);
    }
  }

  return EXIT_SUCCESS;
}

int is_str_uint(char *str)
{
  for (size_t i = 0; i < strlen(str); ++i)
  {
    if (!isdigit(str[i]))
    {
      return 0;
    }
  }
  return 1;
}

int is_arg_list_valid(int argc, char *argv[])
{
  for (size_t i = 1; i < argc; ++i)
  {
    if (argv[i][0] == '-' || argv[i][0] == '+')
    {
      if (argc > 3 || !is_str_uint(argv[i] + 1))
      {
        return 0;
      }
      continue;
    }

    if (!is_str_uint(argv[i]) || (i > 1 && atoi(argv[i - 1]) > atoi(argv[i])))
    {
      return 0;
    }
  }
  return 1;
}

// NOTE: The current program works in a similar fashion as unexpand.
// run: ./entab 4 8 12 16 > file_tabs.txt < file_spaces.txt
`,
    tags: ["chapter05", "exercise5-12", "kandr", "c-programming"]
  },
  {
    id: 'ex0513',
    title: 'Exercise 5.13: Tail',
    displayName: 'Ex 5.13: Tail',
    description: 'Tail',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_NR_OF_LINES 5000
#define DEFAULT_NR_OF_LINES_TO_PRINT 10

#define MAX_LINE_LEN 1000
#define ALLOC_SIZE 10000

static char alloc_buf[ALLOC_SIZE];
static char *alloc_p = alloc_buf;

char *alloc(size_t size);
void afree(char *ptr);

size_t get_line(char line[], size_t max_line_len);

int is_str_uint(char *str);
int is_arg_list_valid(int argc, char *argv[]);

size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines);
void write_lines(char *line_ptr[], const size_t nr_of_lines_to_print, const size_t total_nr_of_lines);

int main(int argc, char *argv[])
{
  if (!is_arg_list_valid(argc, argv))
  {
    puts("Error: invalid arguments.\\n");
    return EXIT_FAILURE;
  }

  size_t nr_of_lines_to_print = DEFAULT_NR_OF_LINES_TO_PRINT;

  if (argc == 2)
  {
    nr_of_lines_to_print = atoi(argv[argc - 1] + 1);
  }

  size_t total_nr_of_lines;
  char *line_ptr[MAX_NR_OF_LINES];

  if ((total_nr_of_lines = read_lines(line_ptr, MAX_NR_OF_LINES)) != -1)
  {
    write_lines(line_ptr, nr_of_lines_to_print, total_nr_of_lines);
  }
  else
  {
    puts("Error: input too large.\\n");
    return EXIT_FAILURE;
  }

  return EXIT_SUCCESS;
}

int is_str_uint(char *str)
{
  for (size_t i = 0; i < strlen(str); ++i)
  {
    if (!isdigit(str[i]))
    {
      return 0;
    }
  }
  return 1;
}

int is_arg_list_valid(int argc, char *argv[])
{
  if (argc > 2 || (argc == 2 && (argv[argc - 1][0] != '-' || !is_str_uint(argv[argc - 1] + 1))))
  {
    return 0;
  }
  return 1;
}

size_t get_line(char line[], size_t max_line_len)
{
  int c;
  size_t i;

  for (i = 0; i < max_line_len - 1 && (c = getc(stdin)) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }

  line[i] = '\\0';

  return i;
}

size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines)
{
  size_t line_length;
  size_t nr_of_lines = 0;

  char *current_line = alloc(MAX_LINE_LEN);
  char *current_line_copy = NULL;

  while ((line_length = get_line(current_line, MAX_LINE_LEN)))
  {
    if (nr_of_lines >= max_nr_of_lines || (current_line_copy = alloc(line_length)) == NULL)
    {
      return -1;
    }
    else
    {
      current_line[line_length - 1] = '\\0';
      strcpy(current_line_copy, current_line);
      line_ptr[nr_of_lines++] = current_line_copy;
    }
  }

  afree(current_line);

  return nr_of_lines;
}

void write_lines(char *line_ptr[], const size_t nr_of_lines_to_print, const size_t total_nr_of_lines)
{
  size_t start_pos = 0;

  if (total_nr_of_lines >= nr_of_lines_to_print)
  {
    start_pos = total_nr_of_lines - nr_of_lines_to_print;
  }

  for (size_t i = start_pos; i < total_nr_of_lines; ++i)
  {
    puts(line_ptr[i]);
    afree(line_ptr[i]);
  }
}

char *alloc(size_t size)
{
  if (alloc_buf + ALLOC_SIZE - alloc_p >= size)
  {
    alloc_p += size;
    return alloc_p - size;
  }

  return NULL;
}

void afree(char *ptr)
{
  if (ptr >= alloc_buf && ptr < alloc_buf + ALLOC_SIZE)
  {
    alloc_p = ptr;
  }
}

// NOTE: run: ./tail -5 < file_in.txt
`,
    tags: ["chapter05", "exercise5-13", "kandr", "c-programming"]
  },
  {
    id: 'ex0514',
    title: 'Exercise 5.14: Sort',
    displayName: 'Ex 5.14: Sort',
    description: 'Sort',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_NR_OF_LINES 5000

#define MAX_LINE_LEN 1000
#define ALLOC_SIZE 10000

static char alloc_buf[ALLOC_SIZE];
static char *alloc_p = alloc_buf;

char *alloc(size_t size);
void afree(char *ptr);

size_t get_line(char line[], size_t max_line_len);

int parse_arg_list(int argc, char *argv[]);

size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines);
void write_lines(char *line_ptr[], const size_t nr_of_lines);

int numcmp(const char *s1, const char *s2);
int estrcmp(const char *s1, const char *s2);
void swap(void *v[], size_t i, size_t j);
void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *));

int order = 1; // 1 ascendent, -1 descendent
int (*comp)(const char *, const char *) = estrcmp;

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    puts("Error: invalid arguments.");
    return EXIT_FAILURE;
  }

  size_t nr_of_lines;
  char *line_ptr[MAX_NR_OF_LINES];

  if ((nr_of_lines = read_lines(line_ptr, MAX_NR_OF_LINES)) != -1)
  {
    quick_sort((void **)line_ptr, 0, nr_of_lines - 1, (int (*)(void *, void *))comp);
    write_lines(line_ptr, nr_of_lines);
  }
  else
  {
    puts("Error: input too large.");
    return EXIT_FAILURE;
  }

  return EXIT_SUCCESS;
}

int parse_arg_list(int argc, char *argv[])
{
  for (int i = 1; i < argc; ++i)
  {
    size_t arg_len = strlen(argv[i]);
    if (arg_len > 1 && argv[i][0] == '-')
    {
      for (size_t j = 1; j < arg_len; ++j)
      {
        switch (argv[i][j])
        {
        case 'n':
          comp = numcmp;
          break;

        case 'r':
          order = -1;
          break;

        default:
          return 0;
          break;
        }
      }
    }
    else
    {
      return 0;
    }
  }

  return 1;
}

size_t get_line(char line[], size_t max_line_len)
{
  int c;
  size_t i;

  for (i = 0; i < max_line_len - 1 && (c = getc(stdin)) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }

  line[i] = '\\0';

  return i;
}

size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines)
{
  size_t line_length;
  size_t nr_of_lines = 0;

  char *current_line = alloc(MAX_LINE_LEN);
  char *current_line_copy = NULL;

  while ((line_length = get_line(current_line, MAX_LINE_LEN)))
  {
    if (nr_of_lines >= max_nr_of_lines || (current_line_copy = alloc(line_length)) == NULL)
    {
      return -1;
    }
    else
    {
      current_line[line_length - 1] = '\\0';
      strcpy(current_line_copy, current_line);
      line_ptr[nr_of_lines++] = current_line_copy;
    }
  }

  afree(current_line);

  return nr_of_lines;
}

void write_lines(char *line_ptr[], const size_t nr_of_lines)
{
  for (size_t i = 0; i < nr_of_lines; ++i)
  {
    puts(line_ptr[i]);
    afree(line_ptr[i]);
  }
}

int numcmp(const char *s1, const char *s2)
{
  double nr1 = atof(s1);
  double nr2 = atof(s2);

  if (nr1 < nr2)
  {
    return order * -1;
  }
  else if (nr1 > nr2)
  {
    return order * 1;
  }

  return 0;
}

int estrcmp(const char *s1, const char *s2)
{
  return order * strcmp(s1, s2);
}

void swap(void *v[], size_t i, size_t j)
{
  void *temp;
  temp = v[i];
  v[i] = v[j];
  v[j] = temp;
}

void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *))
{
  if ((long)start >= (long)end)
  {
    return;
  }

  swap(v, start, (start + end) / 2);

  size_t last = start;
  for (size_t i = start + 1; i <= end; ++i)
  {
    if ((*comp)(v[i], v[start]) < 0)
    {
      swap(v, ++last, i);
    }
  }

  swap(v, start, last);
  quick_sort(v, start, last - 1, comp);
  quick_sort(v, last + 1, end, comp);
}

char *alloc(size_t size)
{
  if (alloc_buf + ALLOC_SIZE - alloc_p >= size)
  {
    alloc_p += size;
    return alloc_p - size;
  }

  return NULL;
}

void afree(char *ptr)
{
  if (ptr >= alloc_buf && ptr < alloc_buf + ALLOC_SIZE)
  {
    alloc_p = ptr;
  }
}

// NOTE: run: ./sort -nr < file_in.txt
`,
    tags: ["chapter05", "exercise5-14", "kandr", "c-programming"]
  },
  {
    id: 'ex0515',
    title: 'Exercise 5.15: Sort',
    displayName: 'Ex 5.15: Sort',
    description: 'Sort',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_NR_OF_LINES 5000

#define MAX_LINE_LEN 1000
#define ALLOC_SIZE 10000

static char alloc_buf[ALLOC_SIZE];
static char *alloc_p = alloc_buf;

char *alloc(size_t size);
void afree(char *ptr);

size_t get_line(char line[], size_t max_line_len);

int parse_arg_list(int argc, char *argv[]);

size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines);
void write_lines(char *line_ptr[], const size_t nr_of_lines);

int numcmp(const char *s1, const char *s2);
int estrcmp(const char *s1, const char *s2);
void swap(void *v[], size_t i, size_t j);
void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *));

int order = 1; // 1 ascendent, -1 descendent
int fold = 0;  // 0 case sensitive, 1 case insensitive
int (*comp)(const char *, const char *) = estrcmp;

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    puts("Error: invalid arguments.");
    return EXIT_FAILURE;
  }

  size_t nr_of_lines;
  char *line_ptr[MAX_NR_OF_LINES];

  if ((nr_of_lines = read_lines(line_ptr, MAX_NR_OF_LINES)) != -1)
  {
    quick_sort((void **)line_ptr, 0, nr_of_lines - 1, (int (*)(void *, void *))comp);
    write_lines(line_ptr, nr_of_lines);
  }
  else
  {
    puts("Error: input too large.");
    return EXIT_FAILURE;
  }

  return EXIT_SUCCESS;
}

int parse_arg_list(int argc, char *argv[])
{
  for (int i = 1; i < argc; ++i)
  {
    size_t arg_len = strlen(argv[i]);
    if (arg_len > 1 && argv[i][0] == '-')
    {
      for (size_t j = 1; j < arg_len; ++j)
      {
        switch (argv[i][j])
        {
        case 'n':
          comp = numcmp;
          break;

        case 'f':
          fold = 1;
          break;

        case 'r':
          order = -1;
          break;

        default:
          return 0;
          break;
        }
      }
    }
    else
    {
      return 0;
    }
  }

  return 1;
}

size_t get_line(char line[], size_t max_line_len)
{
  int c;
  size_t i;

  for (i = 0; i < max_line_len - 1 && (c = getc(stdin)) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }

  line[i] = '\\0';

  return i;
}

size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines)
{
  size_t line_length;
  size_t nr_of_lines = 0;

  char *current_line = alloc(MAX_LINE_LEN);
  char *current_line_copy = NULL;

  while ((line_length = get_line(current_line, MAX_LINE_LEN)))
  {
    if (nr_of_lines >= max_nr_of_lines || (current_line_copy = alloc(line_length)) == NULL)
    {
      return -1;
    }
    else
    {
      current_line[line_length - 1] = '\\0';
      strcpy(current_line_copy, current_line);
      line_ptr[nr_of_lines++] = current_line_copy;
    }
  }

  afree(current_line);

  return nr_of_lines;
}

void write_lines(char *line_ptr[], const size_t nr_of_lines)
{
  for (size_t i = 0; i < nr_of_lines; ++i)
  {
    puts(line_ptr[i]);
    afree(line_ptr[i]);
  }
}

int numcmp(const char *s1, const char *s2)
{
  double nr1 = atof(s1);
  double nr2 = atof(s2);

  if (nr1 < nr2)
  {
    return order * -1;
  }
  else if (nr1 > nr2)
  {
    return order * 1;
  }

  return 0;
}

int estrcmp(const char *s1, const char *s2)
{
  return order * (fold ? strcasecmp(s1, s2) : strcmp(s1, s2));
}

void swap(void *v[], size_t i, size_t j)
{
  void *temp;
  temp = v[i];
  v[i] = v[j];
  v[j] = temp;
}

void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *))
{
  if ((long)start >= (long)end)
  {
    return;
  }

  swap(v, start, (start + end) / 2);

  size_t last = start;
  for (size_t i = start + 1; i <= end; ++i)
  {
    if ((*comp)(v[i], v[start]) < 0)
    {
      swap(v, ++last, i);
    }
  }

  swap(v, start, last);
  quick_sort(v, start, last - 1, comp);
  quick_sort(v, last + 1, end, comp);
}

char *alloc(size_t size)
{
  if (alloc_buf + ALLOC_SIZE - alloc_p >= size)
  {
    alloc_p += size;
    return alloc_p - size;
  }

  return NULL;
}

void afree(char *ptr)
{
  if (ptr >= alloc_buf && ptr < alloc_buf + ALLOC_SIZE)
  {
    alloc_p = ptr;
  }
}

// NOTE: run: ./sort -f < file_in.txt
`,
    tags: ["chapter05", "exercise5-15", "kandr", "c-programming"]
  },
  {
    id: 'ex0516',
    title: 'Exercise 5.16: Sort',
    displayName: 'Ex 5.16: Sort',
    description: 'Sort',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_NR_OF_LINES 5000

#define MAX_LINE_LEN 1000
#define ALLOC_SIZE 10000

static char alloc_buf[ALLOC_SIZE];
static char *alloc_p = alloc_buf;

char *alloc(size_t size);
void afree(char *ptr);

size_t get_line(char line[], size_t max_line_len);

int parse_arg_list(int argc, char *argv[]);

size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines);
void write_lines(char *line_ptr[], const size_t nr_of_lines);

int numcmp(const char *s1, const char *s2);
int estrcmp(const char *s1, const char *s2);
void swap(void *v[], size_t i, size_t j);
void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *));

int order = 1;     // 1 ascendent, -1 descendent
int fold = 0;      // 0 case sensitive, 1 case insensitive
int directory = 0; // 0 normal, 1 directory
int (*comp)(const char *, const char *) = estrcmp;

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    puts("Error: invalid arguments.");
    return EXIT_FAILURE;
  }

  size_t nr_of_lines;
  char *line_ptr[MAX_NR_OF_LINES];

  if ((nr_of_lines = read_lines(line_ptr, MAX_NR_OF_LINES)) != -1)
  {
    quick_sort((void **)line_ptr, 0, nr_of_lines - 1, (int (*)(void *, void *))comp);
    write_lines(line_ptr, nr_of_lines);
  }
  else
  {
    puts("Error: input too large.");
    return EXIT_FAILURE;
  }

  return EXIT_SUCCESS;
}

int parse_arg_list(int argc, char *argv[])
{
  for (int i = 1; i < argc; ++i)
  {
    size_t arg_len = strlen(argv[i]);
    if (arg_len > 1 && argv[i][0] == '-')
    {
      for (size_t j = 1; j < arg_len; ++j)
      {
        switch (argv[i][j])
        {
        case 'n':
          comp = numcmp;
          break;

        case 'f':
          fold = 1;
          break;

        case 'd':
          directory = 1;
          break;

        case 'r':
          order = -1;
          break;

        default:
          return 0;
          break;
        }
      }
    }
    else
    {
      return 0;
    }
  }

  return 1;
}

size_t get_line(char line[], size_t max_line_len)
{
  int c;
  size_t i;

  for (i = 0; i < max_line_len - 1 && (c = getc(stdin)) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }

  line[i] = '\\0';

  return i;
}

size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines)
{
  size_t line_length;
  size_t nr_of_lines = 0;

  char *current_line = alloc(MAX_LINE_LEN);
  char *current_line_copy = NULL;

  while ((line_length = get_line(current_line, MAX_LINE_LEN)))
  {
    if (nr_of_lines >= max_nr_of_lines || (current_line_copy = alloc(line_length)) == NULL)
    {
      return -1;
    }
    else
    {
      current_line[line_length - 1] = '\\0';
      strcpy(current_line_copy, current_line);
      line_ptr[nr_of_lines++] = current_line_copy;
    }
  }

  afree(current_line);

  return nr_of_lines;
}

void write_lines(char *line_ptr[], const size_t nr_of_lines)
{
  for (size_t i = 0; i < nr_of_lines; ++i)
  {
    puts(line_ptr[i]);
    afree(line_ptr[i]);
  }
}

int numcmp(const char *s1, const char *s2)
{
  double nr1 = atof(s1);
  double nr2 = atof(s2);

  if (nr1 < nr2)
  {
    return order * -1;
  }
  else if (nr1 > nr2)
  {
    return order * 1;
  }

  return 0;
}

int estrcmp(const char *s1, const char *s2)
{
  while (*s1 != '\\0' && *s2 != '\\0')
  {
    if (directory)
    {
      while (*s1 != '\\0' && !isalnum(*s1) && !isspace(*s1))
      {
        ++s1;
      }
      while (*s2 != '\\0' && !isalnum(*s2) && !isspace(*s2))
      {
        ++s2;
      }
    }

    int result = fold ? tolower(*s1) - tolower(*s2) : *s1 - *s2;
    if (result == 0)
    {
      ++s1;
      ++s2;
    }
    else
    {
      return order * result;
    }
  }

  return 0;
}

void swap(void *v[], size_t i, size_t j)
{
  void *temp;
  temp = v[i];
  v[i] = v[j];
  v[j] = temp;
}

void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *))
{
  if ((long)start >= (long)end)
  {
    return;
  }

  swap(v, start, (start + end) / 2);

  size_t last = start;
  for (size_t i = start + 1; i <= end; ++i)
  {
    if ((*comp)(v[i], v[start]) < 0)
    {
      swap(v, ++last, i);
    }
  }

  swap(v, start, last);
  quick_sort(v, start, last - 1, comp);
  quick_sort(v, last + 1, end, comp);
}

char *alloc(size_t size)
{
  if (alloc_buf + ALLOC_SIZE - alloc_p >= size)
  {
    alloc_p += size;
    return alloc_p - size;
  }

  return NULL;
}

void afree(char *ptr)
{
  if (ptr >= alloc_buf && ptr < alloc_buf + ALLOC_SIZE)
  {
    alloc_p = ptr;
  }
}

// NOTE: run: ./sort -df < file_in.txt
`,
    tags: ["chapter05", "exercise5-16", "kandr", "c-programming"]
  },
  {
    id: 'ex0517',
    title: 'Exercise 5.17: Sort',
    displayName: 'Ex 5.17: Sort',
    description: 'Sort',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <limits.h>
#include <math.h>

#define MAX_NR_OF_LINES 5000

#define MAX_LINE_LEN 1000
#define ALLOC_SIZE 10000

#define MAX_NR_OF_FIELDS 100
#define MAX_NR_OF_FIELD_OPTIONS 4

#define INT_MAX_NR_OF_DIGITS (size_t)(floor(log10(labs(INT_MAX))) + 1)

static char alloc_buf[ALLOC_SIZE];
static char *alloc_p = alloc_buf;

char *alloc(size_t size);
void afree(char *ptr);

size_t get_line(char line[], size_t max_line_len);

int parse_arg_list(int argc, char *argv[]);

size_t str_nth_blank_pos(const char *s, size_t n);
char *substr(const char *s, size_t start, size_t end);
size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines);
void write_lines(char *line_ptr[], const size_t nr_of_lines);

int numcmp(const char *s1, const char *s2);
int estrcmp(const char *s1, const char *s2);
int fieldscmp(const char *s1, const char *s2);
void swap(void *v[], size_t i, size_t j);
void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *));

int order = 1;     // 1 ascendent, -1 descendent
int fold = 0;      // 0 case sensitive, 1 case insensitive
int directory = 0; // 0 normal, 1 directory
int (*comp)(const char *, const char *) = estrcmp;

enum field_option
{
  INDEX,
  ORDER,
  FOLD,
  DIRECTORY
};

int nr_of_fields = 0;
int (*fields_comp[MAX_NR_OF_FIELDS])(const char *, const char *);
int fields_options[MAX_NR_OF_FIELDS][MAX_NR_OF_FIELD_OPTIONS];

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    puts("Error: invalid arguments.");
    return EXIT_FAILURE;
  }

  size_t nr_of_lines;
  char *line_ptr[MAX_NR_OF_LINES];

  if ((nr_of_lines = read_lines(line_ptr, MAX_NR_OF_LINES)) != -1)
  {
    quick_sort((void **)line_ptr, 0, nr_of_lines - 1, (int (*)(void *, void *))comp);
    write_lines(line_ptr, nr_of_lines);
  }
  else
  {
    puts("Error: input too large.");
    return EXIT_FAILURE;
  }

  return EXIT_SUCCESS;
}

int parse_arg_list(int argc, char *argv[])
{
  for (int i = 1; i < argc; ++i)
  {
    size_t arg_len = strlen(argv[i]);
    if (arg_len > 1 && argv[i][0] == '-')
    {
      for (size_t j = 1; j < arg_len; ++j)
      {
        if (isdigit(argv[i][j]) && !fields_options[i - 1][INDEX])
        {
          char field_index_str[INT_MAX_NR_OF_DIGITS];

          size_t k = 0;
          while (isdigit(argv[i][j]) && j < arg_len && k < INT_MAX_NR_OF_DIGITS)
          {
            field_index_str[k++] = argv[i][j++];
          }
          field_index_str[k] = '\\0';

          fields_options[i - 1][INDEX] = atoi(field_index_str);

          --j;
          ++nr_of_fields;
        }
        else
        {
          switch (argv[i][j])
          {
          case 'n':
            comp = numcmp;
            break;

          case 'f':
            fold = 1;
            break;

          case 'd':
            directory = 1;
            break;

          case 'r':
            order = -1;
            break;

          default:
            return 0;
            break;
          }
        }
      }

      if (nr_of_fields || argc > 2)
      {
        if (!fields_options[i - 1][INDEX])
        {
          return 0;
        }

        fields_comp[i - 1] = comp;
        fields_options[i - 1][ORDER] = order;
        fields_options[i - 1][FOLD] = fold;
        fields_options[i - 1][DIRECTORY] = directory;

        comp = estrcmp;
        order = 1;
        fold = 0;
        directory = 0;
      }
    }
    else
    {
      return 0;
    }
  }

  if (nr_of_fields && nr_of_fields == argc - 1)
  {
    comp = fieldscmp;
  }
  else if (argc > 2)
  {
    return 0;
  }

  return 1;
}

size_t str_nth_blank_pos(const char *s, size_t n)
{
  size_t pos = 0;
  while (n && *s != '\\0')
  {
    if (*s == ' ' || *s == '\\t')
    {
      do
      {
        ++pos;
        ++s;
      } while (*s == ' ' || *s == '\\t');

      --n;
    }
    else
    {
      ++pos;
      ++s;
    }
  }

  return pos;
}

char *substr(const char *s, size_t start, size_t end)
{
  if (start > end)
  {
    return NULL;
  }

  const size_t len = end - start;
  char *dest = alloc(len + 1);

  for (size_t i = start; i < end && s[i] != '\\0'; ++i)
  {
    *dest = s[i];
    ++dest;
  }
  *dest = '\\0';

  return dest - len;
}

size_t get_line(char line[], size_t max_line_len)
{
  int c;
  size_t i;

  for (i = 0; i < max_line_len - 1 && (c = getc(stdin)) != EOF && c != '\\n'; ++i)
  {
    line[i] = c;
  }

  if (c == '\\n')
  {
    line[i] = c;
    ++i;
  }

  line[i] = '\\0';

  return i;
}

size_t read_lines(char *line_ptr[], const size_t max_nr_of_lines)
{
  size_t line_length;
  size_t nr_of_lines = 0;

  char *current_line = alloc(MAX_LINE_LEN);
  char *current_line_copy = NULL;

  while ((line_length = get_line(current_line, MAX_LINE_LEN)))
  {
    if (nr_of_lines >= max_nr_of_lines || (current_line_copy = alloc(line_length)) == NULL)
    {
      return -1;
    }
    else
    {
      current_line[line_length - 1] = '\\0';
      strcpy(current_line_copy, current_line);
      line_ptr[nr_of_lines++] = current_line_copy;
    }
  }

  afree(current_line);

  return nr_of_lines;
}

void write_lines(char *line_ptr[], const size_t nr_of_lines)
{
  for (size_t i = 0; i < nr_of_lines; ++i)
  {
    puts(line_ptr[i]);
    afree(line_ptr[i]);
  }
}

int numcmp(const char *s1, const char *s2)
{
  double nr1 = atof(s1);
  double nr2 = atof(s2);

  if (nr1 < nr2)
  {
    return order * -1;
  }
  else if (nr1 > nr2)
  {
    return order * 1;
  }

  return 0;
}

int estrcmp(const char *s1, const char *s2)
{
  while (*s1 != '\\0' && *s2 != '\\0')
  {
    if (directory)
    {
      while (*s1 != '\\0' && !isalnum(*s1) && !isspace(*s1))
      {
        ++s1;
      }
      while (*s2 != '\\0' && !isalnum(*s2) && !isspace(*s2))
      {
        ++s2;
      }
    }

    int result = fold ? tolower(*s1) - tolower(*s2) : *s1 - *s2;
    if (result == 0)
    {
      ++s1;
      ++s2;
    }
    else
    {
      return order * result;
    }
  }

  return 0;
}

int fieldscmp(const char *s1, const char *s2)
{
  int i = 0;
  while (i < nr_of_fields)
  {
    size_t start_s1 = str_nth_blank_pos(s1, fields_options[i][INDEX] - 1);
    size_t end_s1 = str_nth_blank_pos(s1, fields_options[i][INDEX]);
    char *field_s1 = substr(s1, start_s1, end_s1);

    size_t start_s2 = str_nth_blank_pos(s2, fields_options[i][INDEX] - 1);
    size_t end_s2 = str_nth_blank_pos(s2, fields_options[i][INDEX]);
    char *field_s2 = substr(s2, start_s2, end_s2);

    comp = fields_comp[i];
    order = fields_options[i][ORDER];
    fold = fields_options[i][FOLD];
    directory = fields_options[i][DIRECTORY];

    int comp_result = comp(field_s1, field_s2);

    afree(field_s1);
    afree(field_s2);

    if (comp_result == 0)
    {
      ++i;
    }
    else
    {
      return comp_result;
    }
  }

  return 0;
}

void swap(void *v[], size_t i, size_t j)
{
  void *temp;
  temp = v[i];
  v[i] = v[j];
  v[j] = temp;
}

void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *))
{
  if ((long)start >= (long)end)
  {
    return;
  }

  swap(v, start, (start + end) / 2);

  size_t last = start;
  for (size_t i = start + 1; i <= end; ++i)
  {
    if ((*comp)(v[i], v[start]) < 0)
    {
      swap(v, ++last, i);
    }
  }

  swap(v, start, last);
  quick_sort(v, start, last - 1, comp);
  quick_sort(v, last + 1, end, comp);
}

char *alloc(size_t size)
{
  if (alloc_buf + ALLOC_SIZE - alloc_p >= size)
  {
    alloc_p += size;
    return alloc_p - size;
  }

  return NULL;
}

void afree(char *ptr)
{
  if (ptr >= alloc_buf && ptr < alloc_buf + ALLOC_SIZE)
  {
    alloc_p = ptr;
  }
}

// NOTE: run: ./sort -3nr -2f < file_in.txt
`,
    tags: ["chapter05", "exercise5-17", "kandr", "c-programming"]
  },
  {
    id: 'ex0518',
    title: 'Exercise 5.18: Dcl',
    displayName: 'Ex 5.18: Dcl',
    description: 'Dcl',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_TOKEN_LEN 100
#define MAX_OUT_LEN 1000

void skip_blanks();
void skip_comments();

void get_name(char *dest, const size_t max_len);
int get_next_token(void);

void dcl(void);
void dir_dcl(void);

enum token_type
{
  NAME,
  PARENS,
  BRACKETS,
  PAREN_OPEN = '(',
  PAREN_CLOSE = ')',
  BRACKET_OPEN = '[',
  BRACKET_CLOSE = ']'
};

int next_token;

char token[MAX_TOKEN_LEN];
char name[MAX_TOKEN_LEN];
char data_type[MAX_TOKEN_LEN];
char out[MAX_OUT_LEN];

int main(void)
{
  while (get_next_token() != EOF)
  {
    if (next_token == '\\n')
    {
      continue;
    }

    strcpy(data_type, token);
    out[0] = '\\0';

    dcl();

    if (next_token != '\\n')
    {
      if (next_token == NAME)
      {
        printf("Syntax Error: '%s' unexpected.\\n", token);
      }
      else
      {
        printf("Syntax Error: '%c' unexpected.\\n", next_token);
      }

      do
      {
        get_next_token();
      } while (next_token != '\\n' && next_token != EOF);
    }
    else
    {
      printf("%s:%s %s\\n", name, out, data_type);
    }
  }

  return EXIT_SUCCESS;
}

void skip_blanks()
{
  int c;
  while (isblank(c = getc(stdin)))
    ;
  ungetc(c, stdin);
}

void skip_comments()
{
  int c = getc(stdin);
  if (c == '/')
  {
    c = getc(stdin);
    if (c == '/')
    {
      while ((c = getc(stdin)) != '\\n' && c != EOF)
        ;
    }
    else if (c == '*')
    {
      while ((c = getc(stdin)) != '*' && c != EOF)
        ;
      c = getc(stdin);
      if (c == '/')
      {
        ungetc('\\n', stdin);
        return;
      }
    }
  }
  ungetc(c, stdin);
}

void get_name(char *dest, const size_t max_len)
{
  int c;
  size_t i = 0;
  while ((isalnum(c = getc(stdin)) || c == '_') && i < max_len)
  {
    dest[i++] = c;
  }
  dest[i] = '\\0';
  ungetc(c, stdin);
}

int get_next_token(void)
{
  skip_blanks();
  skip_comments();
  skip_blanks();

  int c = getc(stdin);
  if (c == '(')
  {
    skip_blanks();

    c = getc(stdin);
    if (c == ')')
    {
      strcpy(token, "()");
      return next_token = PARENS;
    }
    ungetc(c, stdin);

    return next_token = PAREN_OPEN;
  }
  else if (c == '[')
  {
    skip_blanks();
    get_name(token, MAX_TOKEN_LEN);
    skip_blanks();

    c = getc(stdin);
    if (c == ']')
    {
      return next_token = BRACKETS;
    }
    ungetc(c, stdin);

    return next_token = BRACKET_OPEN;
  }
  else if (isalpha(c))
  {
    ungetc(c, stdin);
    get_name(token, MAX_TOKEN_LEN);
    return next_token = NAME;
  }

  return next_token = c;
}

void dcl(void)
{
  int nr_of_stars = 0;
  while (get_next_token() == '*')
  {
    ++nr_of_stars;
  }

  dir_dcl();

  while (nr_of_stars--)
  {
    strcat(out, " pointer to");
  }
}

void dir_dcl(void)
{
  if (next_token == PAREN_OPEN)
  {
    dcl();

    if (next_token != PAREN_CLOSE)
    {
      puts("Syntax Error: missing ')'.");
    }
  }
  else if (next_token == NAME)
  {
    strcpy(name, token);
  }
  else
  {
    puts("Syntax Error: expected name or (dcl).");
  }

  while ((next_token = get_next_token()) == PARENS || next_token == BRACKETS)
  {
    if (next_token == PARENS)
    {
      strcat(out, " function returning");
    }
    else if (next_token == BRACKETS)
    {
      strcat(out, " array[");
      strcat(out, token);
      strcat(out, "] of");
    }
  }
}

// NOTE: run: ./dcl < test.txt
`,
    tags: ["chapter05", "exercise5-18", "kandr", "c-programming"]
  },
  {
    id: 'ex0519',
    title: 'Exercise 5.19: Undcl',
    displayName: 'Ex 5.19: Undcl',
    description: 'Undcl',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_TOKEN_LEN 100
#define MAX_OUT_LEN 1000

void skip_blanks();
void skip_comments();

void get_name(char *dest, const size_t max_len);
int get_next_token(void);

enum token_type
{
  NAME,
  PARENS,
  BRACKETS,
  PAREN_OPEN = '(',
  PAREN_CLOSE = ')',
  BRACKET_OPEN = '[',
  BRACKET_CLOSE = ']'
};

int next_token;

char token[MAX_TOKEN_LEN];
char out[MAX_OUT_LEN];

int main(void)
{
  char temp[MAX_OUT_LEN + MAX_TOKEN_LEN];

  while (get_next_token() != EOF)
  {
    strcpy(out, token);

    while (get_next_token() != '\\n')
    {
      if (next_token == PARENS)
      {
        if (out[0] == '*')
        {
          sprintf(temp, "(%s)", out);
          strcpy(out, temp);
        }

        strcat(out, token);
      }
      else if (next_token == BRACKETS)
      {
        if (out[0] == '*')
        {
          sprintf(temp, "(%s)", out);
          strcpy(out, temp);
        }

        sprintf(temp, "[%s]", token);
        strcat(out, temp);
      }
      else if (next_token == '*')
      {
        sprintf(temp, "*%s", out);
        strcpy(out, temp);
      }
      else if (next_token == NAME)
      {
        sprintf(temp, "%s %s", token, out);
        strcpy(out, temp);
      }
      else
      {
        printf("Syntax Error: Invalid input at %s.\\n", token);
      }
    }
    puts(out);
  }

  return EXIT_SUCCESS;
}

void skip_blanks()
{
  int c;
  while (isblank(c = getc(stdin)))
    ;
  ungetc(c, stdin);
}

void skip_comments()
{
  int c = getc(stdin);
  if (c == '/')
  {
    c = getc(stdin);
    if (c == '/')
    {
      while ((c = getc(stdin)) != '\\n' && c != EOF)
        ;
    }
    else if (c == '*')
    {
      while ((c = getc(stdin)) != '*' && c != EOF)
        ;
      c = getc(stdin);
      if (c == '/')
      {
        ungetc('\\n', stdin);
        return;
      }
    }
  }
  ungetc(c, stdin);
}

void get_name(char *dest, const size_t max_len)
{
  int c;
  size_t i = 0;
  while ((isalnum(c = getc(stdin)) || c == '_') && i < max_len)
  {
    dest[i++] = c;
  }
  dest[i] = '\\0';
  ungetc(c, stdin);
}

int get_next_token(void)
{
  skip_blanks();
  skip_comments();
  skip_blanks();

  int c = getc(stdin);
  if (c == '(')
  {
    skip_blanks();

    c = getc(stdin);
    if (c == ')')
    {
      strcpy(token, "()");
      return next_token = PARENS;
    }
    ungetc(c, stdin);

    return next_token = PAREN_OPEN;
  }
  else if (c == '[')
  {
    skip_blanks();
    get_name(token, MAX_TOKEN_LEN);
    skip_blanks();

    c = getc(stdin);
    if (c == ']')
    {
      return next_token = BRACKETS;
    }
    ungetc(c, stdin);

    return next_token = BRACKET_OPEN;
  }
  else if (isalpha(c))
  {
    ungetc(c, stdin);
    get_name(token, MAX_TOKEN_LEN);
    return next_token = NAME;
  }

  return next_token = c;
}

// NOTE: run: ./undcl < test.txt
`,
    tags: ["chapter05", "exercise5-19", "kandr", "c-programming"]
  },
  {
    id: 'ex0520',
    title: 'Exercise 5.20: Dcl',
    displayName: 'Ex 5.20: Dcl',
    description: 'Dcl',
    chapter: '05',
    category: 'K&R - Chapter 5',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_TOKEN_LEN 100
#define MAX_OUT_LEN 1000

void skip_blanks();
void skip_comments();

void get_name(char *dest, const size_t max_len);
int get_next_token(void);

int is_valid_qualifier(const char *str);
int is_valid_data_type(const char *str);

void dcl(void);
void dir_dcl(void);
void attr_dcl(void);

enum boolean
{
  FALSE,
  TRUE
};

enum token_type
{
  NAME,
  PARENS,
  BRACKETS,
  PAREN_OPEN = '(',
  PAREN_CLOSE = ')',
  BRACKET_OPEN = '[',
  BRACKET_CLOSE = ']',
  ATTR_SEPARATOR = ','
};

size_t line_nr = 0;
enum boolean Error = FALSE;

int next_token;

char token[MAX_TOKEN_LEN];
char name[MAX_TOKEN_LEN];
char data_type[MAX_TOKEN_LEN];
char out[MAX_OUT_LEN];

char *data_types[] = {
    "void",
    "char",
    "short",
    "int",
    "long",
    "float",
    "double",
    "custom_type",
};

int main(void)
{
  while (get_next_token() != EOF)
  {
    if (next_token == '\\n')
    {
      ++line_nr;
      continue;
    }

    out[0] = '\\0';

    if (is_valid_data_type(token))
    {
      strcpy(data_type, token);
    }
    else
    {
      Error = TRUE;
      printf("Error: invalid data type '%s' on line %zu.\\n", token, line_nr);

      do
      {
        get_next_token();
      } while (next_token != '\\n' && next_token != EOF);

      ++line_nr;
      continue;
    }

    dcl();

    if (next_token != '\\n')
    {
      if (next_token == NAME)
      {
        printf("Syntax Error: '%s' unexpected on line %zu.\\n", token, line_nr);
      }
      else
      {
        printf("Syntax Error: '%c' unexpected on line %zu.\\n", next_token, line_nr);
      }

      do
      {
        get_next_token();
      } while (next_token != '\\n' && next_token != EOF);
    }
    else if (!Error)
    {
      printf("%s:%s %s\\n", name, out, data_type);
    }

    Error = FALSE;
    ++line_nr;
  }

  return EXIT_SUCCESS;
}

void skip_blanks()
{
  int c;
  while (isblank(c = getc(stdin)))
    ;
  ungetc(c, stdin);
}

void skip_comments()
{
  int c = getc(stdin);
  if (c == '/')
  {
    c = getc(stdin);
    if (c == '/')
    {
      while ((c = getc(stdin)) != '\\n' && c != EOF)
        ;
    }
    else if (c == '*')
    {
      while ((c = getc(stdin)) != '*' && c != EOF)
        ;
      c = getc(stdin);
      if (c == '/')
      {
        ungetc('\\n', stdin);
        return;
      }
    }
  }
  ungetc(c, stdin);
}

void get_name(char *dest, const size_t max_len)
{
  int c;
  size_t i = 0;
  while ((isalnum(c = getc(stdin)) || c == '_') && i < max_len)
  {
    dest[i++] = c;
  }
  dest[i] = '\\0';
  ungetc(c, stdin);
}

int get_next_token(void)
{
  skip_blanks();
  skip_comments();
  skip_blanks();

  int c = getc(stdin);
  if (c == '(')
  {
    skip_blanks();

    c = getc(stdin);
    if (c == ')')
    {
      strcpy(token, "()");
      return next_token = PARENS;
    }
    ungetc(c, stdin);

    return next_token = PAREN_OPEN;
  }
  else if (c == '[')
  {
    skip_blanks();
    get_name(token, MAX_TOKEN_LEN);
    skip_blanks();

    c = getc(stdin);
    if (c == ']')
    {
      return next_token = BRACKETS;
    }
    ungetc(c, stdin);

    return next_token = BRACKET_OPEN;
  }
  else if (isalpha(c))
  {
    ungetc(c, stdin);
    get_name(token, MAX_TOKEN_LEN);
    return next_token = NAME;
  }

  return next_token = c;
}

int is_valid_qualifier(const char *str)
{
  if (strcmp(str, "const") == 0 || strcmp(str, "volatile") == 0)
  {
    return TRUE;
  }
  return FALSE;
}

int is_valid_data_type(const char *str)
{
  size_t nr_of_types = sizeof(data_types) / sizeof(data_types[0]);
  for (size_t i = 0; i < nr_of_types; ++i)
  {
    if (strcmp(data_types[i], str) == 0)
    {
      return TRUE;
    }
  }
  return FALSE;
}

void dcl(void)
{
  int nr_of_stars = 0;
  while (get_next_token() == '*')
  {
    ++nr_of_stars;
  }

  dir_dcl();

  while (nr_of_stars--)
  {
    strcat(out, " pointer to");
  }
}

void dir_dcl(void)
{
  if (next_token == PAREN_OPEN)
  {
    dcl();

    if (next_token != PAREN_CLOSE)
    {
      Error = TRUE;
      printf("Syntax Error: missing ')' on line %zu.\\n", line_nr);
    }
  }
  else if (next_token == NAME)
  {
    strcpy(name, token);
  }
  else
  {
    Error = TRUE;
    printf("Syntax Error: expected name or (dcl) on line %zu.\\n", line_nr);
  }

  while ((next_token = get_next_token()) == PARENS || next_token == BRACKETS || next_token == PAREN_OPEN)
  {
    if (next_token == PAREN_OPEN)
    {
      strcat(out, " function expecting");
      attr_dcl();
      strcat(out, " and returning");

      if (next_token != PAREN_CLOSE)
      {
        Error = TRUE;
        printf("Syntax Error: missing ')' on line %zu.\\n", line_nr);

        if (next_token == '\\n')
        {
          return;
        }
      }
    }
    else if (next_token == PARENS)
    {
      strcat(out, " function returning");
    }
    else if (next_token == BRACKETS)
    {
      strcat(out, " array[");
      strcat(out, token);
      strcat(out, "] of");
    }
  }
}

void attr_dcl(void)
{
  while (get_next_token() != PAREN_CLOSE && next_token != '\\n')
  {
    if (next_token == ATTR_SEPARATOR)
    {
      strcat(out, ",");
    }
    else if (next_token == NAME)
    {
      if (is_valid_qualifier(token))
      {
        strcat(out, " ");
        strcat(out, token);
        get_next_token();
      }

      if (is_valid_data_type(token))
      {
        enum boolean is_void_type = FALSE;
        if (strcmp(token, "void") == 0)
        {
          is_void_type = TRUE;
        }

        strcat(out, " ");
        strcat(out, token);

        get_next_token();
        if (next_token == NAME)
        {
          if (is_void_type)
          {
            printf("Error: variable '%s' has incomplete type 'void' on line %zu.\\n", token, line_nr);
          }

          strcat(out, " ");
          strcat(out, token);
        }
        else if (next_token == PAREN_CLOSE)
        {
          if (is_void_type)
          {
            return;
          }

          Error = TRUE;
          printf("Syntax Error: missing variable name on line %zu.\\n", line_nr);
          return;
        }
        else
        {
          Error = TRUE;
          printf("Syntax Error: '%c' unexpected on line %zu.\\n", next_token, line_nr);
        }
      }
      else
      {
        Error = TRUE;
        printf("Syntax Error: '%s' unexpected on line %zu.\\n", token, line_nr);
      }
    }
    else
    {
      Error = TRUE;
      printf("Syntax Error: '%c' unexpected on line %zu.\\n", next_token, line_nr);
    }
  }
}

// NOTE: run: ./dcl < test.txt
`,
    tags: ["chapter05", "exercise5-20", "kandr", "c-programming"]
  },
  {
    id: 'ex0601',
    title: 'Exercise 6.1: Count C Keywords',
    displayName: 'Ex 6.1: Count C Keywords',
    description: 'Count C Keywords',
    chapter: '06',
    category: 'K&R - Chapter 6',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_WORD_LEN 100
#define NR_OF_KEYS sizeof(keytab) / sizeof(keytab[0])

struct key
{
  char *word;
  int count;
};

void skip_blanks();
void skip_comments();
void skip_chars_between(char start, char end);
void skip_char_literal();
void skip_string_literal();

int get_word(char *word, int max_word_len);
int bin_search(char *word, struct key arr[], int arr_len);

struct key keytab[] = {
    {"auto", 0},
    {"break", 0},
    {"case", 0},
    {"char", 0},
    {"const", 0},
    {"continue", 0},
    {"default", 0},
    {"do", 0},
    {"double", 0},
    {"else", 0},
    {"enum", 0},
    {"extern", 0},
    {"float", 0},
    {"for", 0},
    {"goto", 0},
    {"if", 0},
    {"int", 0},
    {"long", 0},
    {"register", 0},
    {"return", 0},
    {"short", 0},
    {"signed", 0},
    {"size_t", 0},
    {"sizeof", 0},
    {"static", 0},
    {"struct", 0},
    {"switch", 0},
    {"typedef", 0},
    {"union", 0},
    {"unsigned", 0},
    {"void", 0},
    {"volatile", 0},
    {"while", 0},
};

int main(void)
{
  int n;
  char word[MAX_WORD_LEN];

  while (get_word(word, MAX_WORD_LEN) != EOF)
  {
    if (isalpha(word[0]))
    {
      if ((n = bin_search(word, keytab, NR_OF_KEYS)) >= 0)
      {
        keytab[n].count++;
      }
    }
  }

  for (size_t i = 0; i < NR_OF_KEYS; ++i)
  {
    if (keytab[i].count)
    {
      printf("%4d %s\\n", keytab[i].count, keytab[i].word);
    }
  }

  return EXIT_SUCCESS;
}

void skip_blanks()
{
  int c;
  while (isblank(c = getc(stdin)))
    ;
  ungetc(c, stdin);
}

void skip_comments()
{
  int c = getc(stdin);
  if (c == '/')
  {
    c = getc(stdin);
    if (c == '/')
    {
      while ((c = getc(stdin)) != '\\n' && c != EOF)
        ;
    }
    else if (c == '*')
    {
      while ((c = getc(stdin)) != '*' && c != EOF)
        ;
      c = getc(stdin);
      if (c == '/')
      {
        ungetc('\\n', stdin);
        return;
      }
    }
  }
  ungetc(c, stdin);
}

void skip_chars_between(char start, char end)
{
  int c = getc(stdin);
  if (c == start)
  {
    while ((c = getc(stdin)) != EOF)
    {
      if (c == '\\\\')
      {
        if ((c = getc(stdin)) == EOF)
        {
          break;
        }
      }
      else if (c == end)
      {
        return;
      }
    }
  }
  ungetc(c, stdin);
}

void skip_char_literal(void)
{
  skip_chars_between('\\'', '\\'');
}

void skip_string_literal(void)
{
  skip_chars_between('"', '"');
}

int get_word(char *word, int max_word_len)
{
  skip_blanks();
  skip_comments();
  skip_char_literal();
  skip_string_literal();

  int c = getc(stdin);
  size_t i = 0;

  if (c != EOF)
  {
    word[i++] = c;
  }

  if (!isalpha(c) && c != '_')
  {
    word[i] = '\\0';
    return c;
  }

  while ((isalnum(c = getc(stdin)) || c == '_') && i < max_word_len)
  {
    word[i++] = c;
  }
  ungetc(c, stdin);
  word[i] = '\\0';

  return word[0];
}

int bin_search(char *word, struct key arr[], int arr_len)
{
  int low = 0;
  int high = arr_len - 1;
  int mid;

  while (low <= high)
  {
    mid = (low + high) / 2;

    int cond = strcmp(word, arr[mid].word);
    if (cond < 0)
    {
      high = mid - 1;
    }
    else if (cond > 0)
    {
      low = mid + 1;
    }
    else
    {
      return mid;
    }
  }

  return -1;
}

// NOTE: run: ./count_c_keywords < count_c_keywords.c
`,
    tags: ["chapter06", "exercise6-1", "kandr", "c-programming"]
  },
  {
    id: 'ex0602',
    title: 'Exercise 6.2: Var Group',
    displayName: 'Ex 6.2: Var Group',
    description: 'Var Group',
    chapter: '06',
    category: 'K&R - Chapter 6',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_WORD_LEN 100
#define NR_OF_TYPES sizeof(data_types) / sizeof(data_types[0])

struct tree_node
{
  char *word;
  struct tree_node *left;
  struct tree_node *right;
};

struct list_node
{
  struct tree_node *var_group;
  struct list_node *next;
};

struct tree_node *add_to_tree(struct tree_node *node_p, char *word);
void print_tree(struct tree_node *node_p);

struct list_node *add_to_list(struct list_node *list_node_p, char *word);
void print_list(struct list_node *node_p);

int parse_arg_list(int argc, char *argv[]);

// There is a strdup available with POSIX, but it's not part of ISO C.
char *str_dup(char *src);

void skip_blanks();
void skip_comments();
void skip_chars_between(char start, char end);
void skip_char_literal(void);
void skip_string_literal(void);

int get_word(char *word, int max_word_len);
int bin_search(char *word, char *arr[], int arr_len);

char *data_types[] = {
    "char",
    "double",
    "float",
    "int",
    "long",
    "short",
    "void",
};

int var_name_str_cmp_len = 6;

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    puts("Error: invalid arguments.");
    return EXIT_FAILURE;
  }

  int n;
  struct list_node *list_root = NULL;
  char word[MAX_WORD_LEN];

  while (get_word(word, MAX_WORD_LEN) != EOF)
  {
    if ((n = bin_search(word, data_types, NR_OF_TYPES)) >= 0)
    {
      do
      {
        // NOTE: This approach takes into consideration both variable and function names.
        if (get_word(word, MAX_WORD_LEN) != EOF && (isalpha(word[0]) || word[0] == '_'))
        {
          list_root = add_to_list(list_root, word);
        }
      } while (get_word(word, MAX_WORD_LEN) == ',');
    }
  }

  print_list(list_root);

  return EXIT_SUCCESS;
}

int parse_arg_list(int argc, char *argv[])
{
  if (argc > 2)
  {
    return 0;
  }

  if (argc == 2)
  {
    if (!isdigit(argv[1][0]))
    {
      return 0;
    }

    var_name_str_cmp_len = atoi(argv[1]);

    if (var_name_str_cmp_len < 0)
    {
      return 0;
    }
  }

  return 1;
}

char *str_dup(char *src)
{
  char *dest = (char *)malloc(strlen(src) + 1);
  if (dest != NULL)
  {
    strcpy(dest, src);
  }
  return dest;
}

void skip_blanks()
{
  int c;
  while (isblank(c = getc(stdin)))
    ;
  ungetc(c, stdin);
}

void skip_comments()
{
  int c = getc(stdin);
  if (c == '/')
  {
    c = getc(stdin);
    if (c == '/')
    {
      while ((c = getc(stdin)) != '\\n' && c != EOF)
        ;
    }
    else if (c == '*')
    {
      while ((c = getc(stdin)) != '*' && c != EOF)
        ;
      c = getc(stdin);
      if (c == '/')
      {
        ungetc('\\n', stdin);
        return;
      }
    }
  }
  ungetc(c, stdin);
}

void skip_chars_between(char start, char end)
{
  int c = getc(stdin);
  if (c == start)
  {
    while ((c = getc(stdin)) != EOF)
    {
      if (c == '\\\\')
      {
        if ((c = getc(stdin)) == EOF)
        {
          break;
        }
      }
      else if (c == end)
      {
        return;
      }
    }
  }
  ungetc(c, stdin);
}

void skip_char_literal(void)
{
  skip_chars_between('\\'', '\\'');
}

void skip_string_literal(void)
{
  skip_chars_between('"', '"');
}

int get_word(char *word, int max_word_len)
{
  skip_blanks();
  skip_comments();
  skip_char_literal();
  skip_string_literal();

  int c = getc(stdin);
  size_t i = 0;

  if (c != EOF)
  {
    word[i++] = c;
  }

  if (!isalpha(c) && c != '_')
  {
    word[i] = '\\0';
    return c;
  }

  while ((isalnum(c = getc(stdin)) || c == '_') && i < max_word_len)
  {
    word[i++] = c;
  }
  ungetc(c, stdin);
  word[i] = '\\0';

  return word[0];
}

int bin_search(char *word, char *arr[], int arr_len)
{
  int low = 0;
  int high = arr_len - 1;
  int mid;

  while (low <= high)
  {
    mid = (low + high) / 2;

    int cond = strcmp(word, arr[mid]);
    if (cond < 0)
    {
      high = mid - 1;
    }
    else if (cond > 0)
    {
      low = mid + 1;
    }
    else
    {
      return mid;
    }
  }

  return -1;
}

struct tree_node *add_to_tree(struct tree_node *node_p, char *word)
{
  int cond;

  if (node_p == NULL)
  {
    node_p = (struct tree_node *)malloc(sizeof(struct tree_node));
    node_p->word = str_dup(word);
    node_p->left = node_p->right = NULL;
  }
  else if ((cond = strcmp(word, node_p->word)) != 0)
  {
    if (cond < 0)
    {
      node_p->left = add_to_tree(node_p->left, word);
    }
    else if (cond > 0)
    {
      node_p->right = add_to_tree(node_p->right, word);
    }
  }

  return node_p;
}

void print_tree(struct tree_node *node_p)
{
  if (node_p != NULL)
  {
    print_tree(node_p->left);
    puts(node_p->word);
    print_tree(node_p->right);
  }
}

struct list_node *add_to_list(struct list_node *list_node_p, char *word)
{
  if (list_node_p == NULL)
  {
    list_node_p = (struct list_node *)malloc(sizeof(struct list_node));
    list_node_p->var_group = add_to_tree(list_node_p->var_group, word);
  }
  else if (strncmp(list_node_p->var_group->word, word, var_name_str_cmp_len) == 0)
  {
    list_node_p->var_group = add_to_tree(list_node_p->var_group, word);
  }
  else
  {
    list_node_p->next = add_to_list(list_node_p->next, word);
  }

  return list_node_p;
}

void print_list(struct list_node *node_p)
{
  if (node_p != NULL)
  {
    print_tree(node_p->var_group);
    putchar('\\n');
    print_list(node_p->next);
  }
}

// NOTE: run: ./var_group 5 < test.txt
`,
    tags: ["chapter06", "exercise6-2", "kandr", "c-programming"]
  },
  {
    id: 'ex0603',
    title: 'Exercise 6.3: Cross Referencer',
    displayName: 'Ex 6.3: Cross Referencer',
    description: 'Cross Referencer',
    chapter: '06',
    category: 'K&R - Chapter 6',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_WORD_LEN 100
#define NR_OF_LINKING_WORDS sizeof(linking_words) / sizeof(linking_words[0])

enum boolean
{
  FALSE,
  TRUE
};

struct list_node
{
  size_t line_number;
  struct list_node *next;
};

struct tree_node
{
  char *word;
  struct list_node *line_numbers;
  struct tree_node *left;
  struct tree_node *right;
};

struct list_node *add_to_list(struct list_node *list_node_p, size_t line_number);
void print_list(struct list_node *node_p);

struct tree_node *add_to_tree(struct tree_node *node_p, char *word, size_t line_number);
void print_tree(struct tree_node *node_p);

// There is a strdup available with POSIX, but it's not part of ISO C.
char *str_dup(char *src);

void skip_blanks();

int get_word(char *word, int max_word_len);
int bin_search(char *word, char *arr[], int arr_len);

char *linking_words[] = {
    "And",
    "As",
    "But",
    "For",
    "Like",
    "Nor",
    "Or",
    "So",
    "The",
    "Then",
    "To",
    "Too",
    "Yet",
    "and",
    "as",
    "but",
    "for",
    "like",
    "nor",
    "or",
    "so",
    "the",
    "then",
    "to",
    "too",
    "yet",
};

int main(void)
{
  size_t line_number = 1;
  char word[MAX_WORD_LEN];
  struct tree_node *tree_root = NULL;

  while (get_word(word, MAX_WORD_LEN) != EOF)
  {
    if (word[0] == '\\n')
    {
      ++line_number;
    }
    else if (isalpha(word[0]))
    {
      if (bin_search(word, linking_words, NR_OF_LINKING_WORDS) == -1)
      {
        tree_root = add_to_tree(tree_root, word, line_number);
      }
    }
  }

  print_tree(tree_root);

  return EXIT_SUCCESS;
}

char *str_dup(char *src)
{
  char *dest = (char *)malloc(strlen(src) + 1);
  if (dest != NULL)
  {
    strcpy(dest, src);
  }
  return dest;
}

void skip_blanks()
{
  int c;
  while (isblank(c = getc(stdin)))
    ;
  ungetc(c, stdin);
}

int get_word(char *word, int max_word_len)
{
  skip_blanks();

  int c = getc(stdin);
  size_t i = 0;

  if (c != EOF)
  {
    word[i++] = c;
  }

  if (!isalpha(c) && c != '_')
  {
    word[i] = '\\0';
    return c;
  }

  while ((isalnum(c = getc(stdin)) || c == '_') && i < max_word_len)
  {
    word[i++] = c;
  }
  ungetc(c, stdin);
  word[i] = '\\0';

  return word[0];
}

int bin_search(char *word, char *arr[], int arr_len)
{
  int low = 0;
  int high = arr_len - 1;
  int mid;

  while (low <= high)
  {
    mid = (low + high) / 2;

    int cond = strcmp(word, arr[mid]);
    if (cond < 0)
    {
      high = mid - 1;
    }
    else if (cond > 0)
    {
      low = mid + 1;
    }
    else
    {
      return mid;
    }
  }

  return -1;
}

struct tree_node *add_to_tree(struct tree_node *node_p, char *word, size_t line_number)
{
  int cond;

  if (node_p == NULL)
  {
    node_p = (struct tree_node *)malloc(sizeof(struct tree_node));
    node_p->line_numbers = add_to_list(node_p->line_numbers, line_number);
    node_p->word = str_dup(word);
    node_p->left = node_p->right = NULL;
  }
  else if ((cond = strcmp(word, node_p->word)) == 0)
  {
    node_p->line_numbers = add_to_list(node_p->line_numbers, line_number);
  }
  else if (cond < 0)
  {
    node_p->left = add_to_tree(node_p->left, word, line_number);
  }
  else if (cond > 0)
  {
    node_p->right = add_to_tree(node_p->right, word, line_number);
  }

  return node_p;
}

void print_tree(struct tree_node *node_p)
{
  if (node_p != NULL)
  {
    print_tree(node_p->left);
    printf("%s: ", node_p->word);
    print_list(node_p->line_numbers);
    putchar('\\n');
    print_tree(node_p->right);
  }
}

struct list_node *add_to_list(struct list_node *list_node_p, size_t line_number)
{
  if (list_node_p == NULL)
  {
    list_node_p = (struct list_node *)malloc(sizeof(struct list_node));
    list_node_p->line_number = line_number;
    list_node_p->next = NULL;
  }
  else
  {
    list_node_p->next = add_to_list(list_node_p->next, line_number);
  }

  return list_node_p;
}

void print_list(struct list_node *node_p)
{
  static enum boolean first = TRUE;
  if (node_p != NULL)
  {
    if (first)
    {
      first = FALSE;
      printf("%zu", node_p->line_number);
    }
    else
    {
      printf(", %zu", node_p->line_number);
    }

    print_list(node_p->next);
  }
  else
  {
    first = TRUE;
  }
}

// NOTE: run: ./cross_referencer < test.txt
`,
    tags: ["chapter06", "exercise6-3", "kandr", "c-programming"]
  },
  {
    id: 'ex0604',
    title: 'Exercise 6.4: Words Frequency',
    displayName: 'Ex 6.4: Words Frequency',
    description: 'Words Frequency',
    chapter: '06',
    category: 'K&R - Chapter 6',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_WORD_LEN 100
#define MAX_NR_OF_NODES 1000

struct tree_node
{
  char *word;
  int count;
  struct tree_node *left;
  struct tree_node *right;
};

struct tree_node *add_to_tree(struct tree_node *node_p, char *word);
void print_tree(struct tree_node *node_p);
void copy_tree_to_array(struct tree_node *arr[], struct tree_node *tree_node_p);

// There is a strdup available with POSIX, but it's not part of ISO C.
char *str_dup(char *src);

void skip_blanks();

int get_word(char *word, int max_word_len);
int tree_node_cmp(const struct tree_node *node_p_1, const struct tree_node *node_p_2);
void swap(void *v[], size_t i, size_t j);
void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *));

size_t nr_of_nodes = 0;

int main(void)
{
  struct tree_node *tree_root = NULL;
  char word[MAX_WORD_LEN];

  while (get_word(word, MAX_WORD_LEN) != EOF)
  {
    if (isalpha(word[0]))
    {
      tree_root = add_to_tree(tree_root, word);
    }
  }

  struct tree_node *tree_node_list[MAX_NR_OF_NODES] = {NULL};
  copy_tree_to_array(tree_node_list, tree_root);

  quick_sort((void **)tree_node_list, 0, nr_of_nodes - 1, (int (*)(void *, void *))tree_node_cmp);

  for (size_t i = 0; i < nr_of_nodes; ++i)
  {
    printf("%4d %s\\n", tree_node_list[i]->count, tree_node_list[i]->word);
  }

  return EXIT_SUCCESS;
}

char *str_dup(char *src)
{
  char *dest = (char *)malloc(strlen(src) + 1);
  if (dest != NULL)
  {
    strcpy(dest, src);
  }
  return dest;
}

void skip_blanks()
{
  int c;
  while (isblank(c = getc(stdin)))
    ;
  ungetc(c, stdin);
}

int get_word(char *word, int max_word_len)
{
  skip_blanks();

  int c = getc(stdin);
  size_t i = 0;

  if (c != EOF)
  {
    word[i++] = c;
  }

  if (!isalpha(c) && c != '_')
  {
    word[i] = '\\0';
    return c;
  }

  while ((isalnum(c = getc(stdin)) || c == '_') && i < max_word_len)
  {
    word[i++] = c;
  }
  ungetc(c, stdin);
  word[i] = '\\0';

  return word[0];
}

int tree_node_cmp(const struct tree_node *node_p_1, const struct tree_node *node_p_2)
{
  if (node_p_1->count > node_p_2->count)
  {
    return -1;
  }
  else if (node_p_1->count < node_p_2->count)
  {
    return 1;
  }

  return 0;
}

void swap(void *v[], size_t i, size_t j)
{
  void *temp;
  temp = v[i];
  v[i] = v[j];
  v[j] = temp;
}

void quick_sort(void *v[], size_t start, size_t end, int (*comp)(void *, void *))
{
  if ((long)start >= (long)end)
  {
    return;
  }

  swap(v, start, (start + end) / 2);

  size_t last = start;
  for (size_t i = start + 1; i <= end; ++i)
  {
    if ((*comp)(v[i], v[start]) < 0)
    {
      swap(v, ++last, i);
    }
  }

  swap(v, start, last);
  quick_sort(v, start, last - 1, comp);
  quick_sort(v, last + 1, end, comp);
}

struct tree_node *add_to_tree(struct tree_node *node_p, char *word)
{
  int cond;

  if (node_p == NULL)
  {
    node_p = (struct tree_node *)malloc(sizeof(struct tree_node));
    node_p->word = str_dup(word);
    node_p->count = 1;
    node_p->left = node_p->right = NULL;
  }
  else if ((cond = strcmp(word, node_p->word)) == 0)
  {
    node_p->count++;
  }
  else if (cond < 0)
  {
    node_p->left = add_to_tree(node_p->left, word);
  }
  else if (cond > 0)
  {
    node_p->right = add_to_tree(node_p->right, word);
  }

  return node_p;
}

void print_tree(struct tree_node *node_p)
{
  if (node_p != NULL)
  {
    print_tree(node_p->left);
    printf("%4d %s\\n", node_p->count, node_p->word);
    print_tree(node_p->right);
  }
}

void copy_tree_to_array(struct tree_node *arr[], struct tree_node *tree_node_p)
{
  if (tree_node_p != NULL)
  {
    copy_tree_to_array(arr, tree_node_p->left);
    if (nr_of_nodes < MAX_NR_OF_NODES)
    {
      arr[nr_of_nodes++] = tree_node_p;
    }
    copy_tree_to_array(arr, tree_node_p->right);
  }
}

// NOTE: run: ./words_frequency < words_frequency.c
`,
    tags: ["chapter06", "exercise6-4", "kandr", "c-programming"]
  },
  {
    id: 'ex0605',
    title: 'Exercise 6.5: Undef',
    displayName: 'Ex 6.5: Undef',
    description: 'Undef',
    chapter: '06',
    category: 'K&R - Chapter 6',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define HASH_SIZE 101

enum boolean
{
  FALSE,
  TRUE
};

struct list_node
{
  char *name;
  char *definition;
  struct list_node *next;
};

// There is a strdup available with POSIX, but it's not part of ISO C.
char *str_dup(char *src);

size_t hash(char *str);
struct list_node *lookup(char *str);
struct list_node *install(char *name, char *definition);
enum boolean undef(char *name);

static struct list_node *hash_table[HASH_SIZE];

int main(void)
{
  install("TEST", "test");

  // Install other collision values for the same hash as for "TEST" -> 51.
  install("TSHe", "test1");
  install("UPXD", "test2");
  install("9iww", "test3");
  install("mY1a", "test4");
  install("uuoT", "test5");

  struct list_node *node_p = lookup("TEST");
  if (node_p == NULL)
  {
    puts("Error: hash value not found.");
  }
  else
  {
    printf("%s: %s\\n", node_p->name, node_p->definition);
    if (undef("TEST") && lookup("TEST") == NULL)
    {
      printf("'%s' was undefined successfully.\\n", "TEST");
    }
    else
    {
      printf("Error: failed to undefine '%s'.\\n", "TEST");
    }
  }

  return EXIT_SUCCESS;
}

char *str_dup(char *src)
{
  char *dest = (char *)malloc(strlen(src) + 1);
  if (dest != NULL)
  {
    strcpy(dest, src);
  }
  return dest;
}

size_t hash(char *str)
{
  size_t hash_value = 0;
  while (*str != '\\0')
  {
    hash_value = *str + 31 * hash_value;
    ++str;
  }
  return hash_value % HASH_SIZE;
}

struct list_node *lookup(char *str)
{
  struct list_node *node_p;
  for (node_p = hash_table[hash(str)]; node_p != NULL; node_p = node_p->next)
  {
    if (strcmp(str, node_p->name) == 0)
    {
      return node_p;
    }
  }
  return NULL;
}

struct list_node *install(char *name, char *definition)
{
  struct list_node *node_p;
  if ((node_p = lookup(name)) == NULL)
  {
    node_p = (struct list_node *)malloc(sizeof(*node_p));
    if (node_p == NULL || (node_p->name = str_dup(name)) == NULL)
    {
      return NULL;
    }
    size_t hash_value = hash(name);
    node_p->next = hash_table[hash_value];
    hash_table[hash_value] = node_p;
  }
  else
  {
    free(node_p->definition);
  }

  if ((node_p->definition = str_dup(definition)) == NULL)
  {
    return NULL;
  }

  return node_p;
}

enum boolean undef(char *name)
{
  struct list_node *node_p;
  struct list_node *prev_node_p;
  size_t hash_value = hash(name);
  for (node_p = hash_table[hash_value], prev_node_p = NULL;
       node_p != NULL;
       prev_node_p = node_p, node_p = node_p->next)
  {
    if (strcmp(name, node_p->name) == 0)
    {
      free(node_p->name);
      free(node_p->definition);

      if (prev_node_p == NULL)
      {
        hash_table[hash_value] = node_p->next;
      }
      else
      {
        prev_node_p->next = node_p->next;
      }

      free(node_p);
      return TRUE;
    }
  }

  return FALSE;
}
`,
    tags: ["chapter06", "exercise6-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0606',
    title: 'Exercise 6.6: Define',
    displayName: 'Ex 6.6: Define',
    description: 'Define',
    chapter: '06',
    category: 'K&R - Chapter 6',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define HASH_SIZE 101
#define MAX_LINE_LEN 1000
#define MAX_WORD_LEN 100

enum boolean
{
  FALSE,
  TRUE
};

enum directive_type
{
  NONE = 0,
  DEFINE = 1,
  UNDEF = 2
};

struct list_node
{
  char *name;
  char *definition;
  struct list_node *next;
};

// There is a strdup available with POSIX, but it's not part of ISO C.
char *str_dup(char *src);

size_t hash(char *str);
struct list_node *lookup(char *str);
struct list_node *install(char *name, char *definition);
enum boolean undef(char *name);

int get_word(char *word, size_t max_word_len);
size_t get_alnum_str(char *str, size_t max_str_len);

void consume_word(char *word, char *Error_str);
void consume_blanks(void);
void consume_comments(void);
void consume_chars_between(char start, char end);
void consume_char_literal(void);
void consume_string_literal(void);
void consume_preproc(void);

static struct list_node *hash_table[HASH_SIZE];

int main(void)
{
  int c;
  char word[MAX_WORD_LEN];
  while ((c = get_word(word, MAX_WORD_LEN)) != EOF)
  {
    if (isalpha(c))
    {
      struct list_node *node_p = lookup(word);
      if (node_p != NULL)
      {
        printf("%s", node_p->definition);
      }
      else
      {
        printf("%s", word);
      }
    }
    else
    {

      if (c == '/')
      {
        ungetc(c, stdin);
        consume_comments();
      }
      else if (c == '\\'')
      {
        ungetc(c, stdin);
        consume_char_literal();
      }
      else if (c == '"')
      {
        ungetc(c, stdin);
        consume_string_literal();
      }
      else if (c == '#')
      {
        ungetc(c, stdin);
        consume_preproc();
      }
      else
      {
        putc(c, stdout);
      }
    }
  }

  return EXIT_SUCCESS;
}

char *str_dup(char *src)
{
  char *dest = (char *)malloc(strlen(src) + 1);
  if (dest != NULL)
  {
    strcpy(dest, src);
  }
  return dest;
}

size_t hash(char *str)
{
  size_t hash_value = 0;
  while (*str != '\\0')
  {
    hash_value = *str + 31 * hash_value;
    ++str;
  }
  return hash_value % HASH_SIZE;
}

struct list_node *lookup(char *str)
{
  struct list_node *node_p;
  for (node_p = hash_table[hash(str)]; node_p != NULL; node_p = node_p->next)
  {
    if (strcmp(str, node_p->name) == 0)
    {
      return node_p;
    }
  }
  return NULL;
}

struct list_node *install(char *name, char *definition)
{
  struct list_node *node_p;
  if ((node_p = lookup(name)) == NULL)
  {
    node_p = (struct list_node *)malloc(sizeof(*node_p));
    if (node_p == NULL || (node_p->name = str_dup(name)) == NULL)
    {
      return NULL;
    }
    size_t hash_value = hash(name);
    node_p->next = hash_table[hash_value];
    hash_table[hash_value] = node_p;
  }
  else
  {
    free(node_p->definition);
  }

  if ((node_p->definition = str_dup(definition)) == NULL)
  {
    return NULL;
  }

  return node_p;
}

enum boolean undef(char *name)
{
  struct list_node *node_p;
  struct list_node *prev_node_p;
  size_t hash_value = hash(name);
  for (node_p = hash_table[hash_value], prev_node_p = NULL;
       node_p != NULL;
       prev_node_p = node_p, node_p = node_p->next)
  {
    if (strcmp(name, node_p->name) == 0)
    {
      free(node_p->name);
      free(node_p->definition);

      if (prev_node_p == NULL)
      {
        hash_table[hash_value] = node_p->next;
      }
      else
      {
        prev_node_p->next = node_p->next;
      }

      free(node_p);
      return TRUE;
    }
  }

  return FALSE;
}

int get_word(char *word, size_t max_word_len)
{
  int c = getc(stdin);
  size_t i = 0;

  if (c != EOF)
  {
    word[i++] = c;
  }

  if (!isalpha(c) && c != '_')
  {
    word[i] = '\\0';
    return c;
  }

  while ((isalnum(c = getc(stdin)) || c == '_') && i < max_word_len)
  {
    word[i++] = c;
  }
  ungetc(c, stdin);
  word[i] = '\\0';

  return word[0];
}

size_t get_alnum_str(char *str, size_t max_str_len)
{
  size_t i = 0;
  int c;
  while (isalnum(c = getc(stdin)) && i < max_str_len)
  {
    str[i++] = c;
  }
  str[i] = '\\0';
  ungetc(c, stdin);
  return i;
}

void consume_word(char *word, char *Error_str)
{
  int c;
  if ((c = get_word(word, MAX_WORD_LEN)) == EOF)
  {
    ungetc(c, stdin);
    return;
  }
  else if (!isalpha(c))
  {
    puts(Error_str);
  }
  printf("%s", word);
}

void consume_blanks(void)
{
  int c;
  while (isblank(c = getc(stdin)))
  {
    putc(c, stdout);
  }
  ungetc(c, stdin);
}

void consume_comments(void)
{
  int c = getc(stdin);
  if (c == '/')
  {
    putc(c, stdout);

    c = getc(stdin);
    if (c == '/')
    {
      putc(c, stdout);
      while ((c = getc(stdin)) != '\\n' && c != EOF)
      {
        putc(c, stdout);
      }
    }
    else if (c == '*')
    {
      putc(c, stdout);
      while ((c = getc(stdin)) != EOF)
      {
        putc(c, stdout);
        if (c == '*')
        {
          c = getc(stdin);
          putc(c, stdout);
          if (c == '/')
          {
            break;
          }
        }
      }

      c = getc(stdin);
      if (c == '/')
      {
        putc(c, stdout);
        return;
      }
    }
  }
  ungetc(c, stdin);
}

void consume_chars_between(char start, char end)
{
  int c = getc(stdin);
  if (c == start)
  {
    putc(c, stdout);
    while ((c = getc(stdin)) != EOF)
    {
      putc(c, stdout);
      if (c == '\\\\')
      {
        c = getc(stdin);
        putc(c, stdout);
        if (c == EOF)
        {
          break;
        }
      }
      else if (c == end)
      {
        return;
      }
    }
  }
  ungetc(c, stdin);
}

void consume_char_literal(void)
{
  consume_chars_between('\\'', '\\'');
}

void consume_string_literal(void)
{
  consume_chars_between('"', '"');
}

void consume_preproc(void)
{
  int c = getc(stdin);
  if (c == '#')
  {
    putc(c, stdout);

    char word[MAX_WORD_LEN];
    consume_word(word, "Error: expected preprocessor directive.");

    enum directive_type directive = NONE;
    if (strcmp(word, "define") == 0)
    {
      directive = DEFINE;
    }
    else if (strcmp(word, "undef") == 0)
    {
      directive = UNDEF;
    }

    if (directive)
    {
      consume_blanks();
      consume_word(word, "Error: invalid name.");
    }

    if (directive == DEFINE)
    {
      consume_blanks();
      char definition[MAX_WORD_LEN];
      get_alnum_str(definition, MAX_WORD_LEN);
      printf("%s", definition);

      struct list_node *node_p = lookup(definition);
      if (node_p != NULL)
      {
        install(word, node_p->definition);
      }
      else
      {
        install(word, definition);
      }
    }
    else if (directive == UNDEF)
    {
      undef(word);
    }
  }
  else
  {
    ungetc(c, stdin);
  }
}

// NOTE: run: ./define < define.c
`,
    tags: ["chapter06", "exercise6-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0701',
    title: 'Exercise 7.1: Case',
    displayName: 'Ex 7.1: Case',
    description: 'Case',
    chapter: '07',
    category: 'K&R - Chapter 7',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

typedef enum
{
  false,
  true
} boolean;

typedef int (*convert_fn_t)(int);

boolean parse_arg_list(int argc, char *argv[]);
void consume_input(convert_fn_t convert);

convert_fn_t convert;

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    puts("Error: invalid arguments.");
    return EXIT_FAILURE;
  }

  consume_input(convert);

  return EXIT_SUCCESS;
}

boolean parse_arg_list(int argc, char *argv[])
{
  if (strcmp(argv[0], "lower") == 0)
  {
    convert = tolower;
    return true;
  }
  else if (strcmp(argv[0], "upper") == 0)
  {
    convert = toupper;
    return true;
  }

  return false;
}

void consume_input(convert_fn_t convert)
{
  int c;
  while ((c = getc(stdin)) != EOF)
  {
    putc(convert(c), stdout);
  }
}

// NOTE: run: ( exec -a upper ./case < case.c )
// It is possible to change argv[0] by using the exec command.
`,
    tags: ["chapter07", "exercise7-1", "kandr", "c-programming"]
  },
  {
    id: 'ex0702',
    title: 'Exercise 7.2: Print',
    displayName: 'Ex 7.2: Print',
    description: 'Print',
    chapter: '07',
    category: 'K&R - Chapter 7',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_LINE_LEN 80
#define OFFSET 10

typedef enum
{
  false,
  true
} boolean;

boolean parse_arg_list(int argc, char *argv[]);
int is_ascii(int c);

boolean octal = true;

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    puts("Error: invalid arguments.");
    return EXIT_FAILURE;
  }

  int c;
  size_t col_pos = 1;
  while ((c = getc(stdin)) != EOF)
  {
    if (is_ascii(c))
    {
      if (c == '\\n')
      {
        c = ' ';
      }

      putc(c, stdout);
      ++col_pos;
    }
    else
    {
      if (octal)
      {
        col_pos += printf("\\\\%o", c) - 1;
      }
      else
      {
        col_pos += printf("\\\\%x", c) - 1;
      }
    }

    if (col_pos >= MAX_LINE_LEN - OFFSET)
    {
      if (isblank(c))
      {
        col_pos = 1;
        putc('\\n', stdout);
      }
    }
  }
  putc('\\n', stdout);

  return EXIT_SUCCESS;
}

boolean parse_arg_list(int argc, char *argv[])
{
  if (argc == 2)
  {
    if (strcmp(argv[1], "-o") == 0)
    {
      octal = true;
      return true;
    }
    else if (strcmp(argv[1], "-x") == 0)
    {
      octal = false;
      return true;
    }
  }

  return false;
}

int is_ascii(int c)
{
  if (c > 127)
  {
    return 0;
  }

  return 1;
}

// NOTE: run: ./print -x < test.txt
`,
    tags: ["chapter07", "exercise7-2", "kandr", "c-programming"]
  },
  {
    id: 'ex0703',
    title: 'Exercise 7.3: Minprintf',
    displayName: 'Ex 7.3: Minprintf',
    description: 'Minprintf',
    chapter: '07',
    category: 'K&R - Chapter 7',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>

void minprintf(const char *format, ...);

int main(int argc, char *argv[])
{
  int a;
  minprintf("Let's print %d, %i, %o, %x, %X, %u, %c, %e, %E, %g, %G, %f, %p, and %s.\\n",
            2, 3, 8, 16, 16, -1, 97, 0.0025f, 0.0023f, 0.0025f, 0.0023f, 3.14159f, &a, "hello, world");
  return EXIT_SUCCESS;
}

void minprintf(const char *format, ...)
{
  va_list arg_p;

  va_start(arg_p, format);
  for (; *format != '\\0'; ++format)
  {
    if (*format != '%')
    {
      putc(*format, stdout);
      continue;
    }

    switch (*++format)
    {
    case 'd':
    case 'i':
      printf("%d", va_arg(arg_p, int));
      break;

    case 'o':
      printf("%o", va_arg(arg_p, int));
      break;

    case 'x':
    case 'X':
      printf("%x", va_arg(arg_p, int));
      break;

    case 'u':
      printf("%u", va_arg(arg_p, int));
      break;

    case 'c':
      printf("%c", va_arg(arg_p, int));
      break;

    case 's':
      printf("%s", va_arg(arg_p, char *));
      break;

    case 'f':
      printf("%f", va_arg(arg_p, double));
      break;

    case 'e':
    case 'E':
      printf("%e", va_arg(arg_p, double));
      break;

    case 'g':
    case 'G':
      printf("%g", va_arg(arg_p, double));
      break;

    case 'p':
      printf("%p", va_arg(arg_p, void *));
      break;

    default:
      putc(*format, stdout);
      break;
    }
  }
  va_end(arg_p);
}
`,
    tags: ["chapter07", "exercise7-3", "kandr", "c-programming"]
  },
  {
    id: 'ex0704',
    title: 'Exercise 7.4: Minscanf',
    displayName: 'Ex 7.4: Minscanf',
    description: 'Minscanf',
    chapter: '07',
    category: 'K&R - Chapter 7',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>

void minscanf(const char *format, ...);

int main(int argc, char *argv[])
{
  int decimal;
  int integer;
  int octal;
  int unsigned_decimal;
  int hexadecimal_integer;
  char character;
  char str[100];
  float float_point_number;

  minscanf("%d", &decimal);
  minscanf("%i", &integer);
  minscanf("%o", &octal);
  minscanf("%u", &unsigned_decimal);
  minscanf("%x", &hexadecimal_integer);
  minscanf("%c", &character);
  minscanf("%s", str);
  minscanf("%f", &float_point_number);

  printf("decimal: %d\\n", decimal);
  printf("integer: %i\\n", integer);
  printf("octal: %o\\n", octal);
  printf("unsigned_decimal: %u\\n", unsigned_decimal);
  printf("hexadecimal_integer: %x\\n", hexadecimal_integer);
  printf("character: %c\\n", character);
  printf("str: %s\\n", str);
  printf("float_point_number: %f\\n", float_point_number);

  return EXIT_SUCCESS;
}

void minscanf(const char *format, ...)
{
  va_list arg_p;

  va_start(arg_p, format);
  for (; *format != '\\0'; ++format)
  {
    if (*format != '%')
    {
      continue;
    }

    switch (*++format)
    {
    case 'd':
      scanf("%d", va_arg(arg_p, int *));
      break;

    case 'i':
      scanf("%i", va_arg(arg_p, int *));
      break;

    case 'o':
      scanf("%o", va_arg(arg_p, int *));
      break;

    case 'u':
      scanf("%u", va_arg(arg_p, unsigned int *));
      break;

    case 'x':
      scanf("%x", va_arg(arg_p, int *));
      break;

    case 'c':
      scanf("%c", va_arg(arg_p, char *));
      break;

    case 's':
      scanf("%s", va_arg(arg_p, char *));
      break;

    case 'e':
    case 'f':
    case 'g':
      scanf("%f", va_arg(arg_p, float *));
      break;

    default:
      break;
    }
  }
  va_end(arg_p);
}

// NOTE: run: ./minscanf <<< "1 2 3 4 5r hello 2.3"
// In Unix like systems:< file or directory, << here doc, <<< here string
`,
    tags: ["chapter07", "exercise7-4", "kandr", "c-programming"]
  },
  {
    id: 'ex0705',
    title: 'Exercise 7.5: Calculator',
    displayName: 'Ex 7.5: Calculator',
    description: 'Calculator',
    chapter: '07',
    category: 'K&R - Chapter 7',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#define STACK_MAX_SIZE 100
#define MAX_STR_LEN 1000

void push(double);
double pop(void);

int sp = 0;
double stack[STACK_MAX_SIZE];

int main(int argc, char *argv[])
{
  char c;
  double op2;
  char str[MAX_STR_LEN];

  while (scanf("%s", str) != EOF)
  {
    if (sscanf(str, "%lf", &op2) == 1)
    {
      push(op2);
    }
    else if (sscanf(str, "%c", &c) == 1)
    {
      switch (c)
      {
      case '+':
        push(pop() + pop());
        break;

      case '-':
        op2 = pop();
        push(pop() - op2);
        break;

      case '*':
        push(pop() * pop());
        break;

      case '/':
        op2 = pop();

        if (op2 != 0.0)
        {
          push(pop() / op2);
        }
        else
        {
          printf("Error: zero divisor.\\n");
        }
        break;

      case '%':
        op2 = pop();

        if (op2 != 0.0)
        {
          push((int)pop() % (int)op2);
        }
        else
        {
          printf("Error: zero divisor.\\n");
        }
        break;

      default:
        printf("Error: unknown command.\\n");
        break;
      }
    }
  }

  printf("result: %.8g\\n", pop());

  return EXIT_SUCCESS;
}

void push(double f)
{
  if (sp < STACK_MAX_SIZE)
  {
    stack[sp++] = f;
  }
  else
  {
    printf("Error: stack full, can't push %g.\\n", f);
  }
}

double pop(void)
{
  if (sp > 0)
  {
    return stack[--sp];
  }
  else
  {
    printf("Error: stack empty.\\n");
    return 0.0;
  }
}

// NOTE: run: ./calculator <<< "2 3 4 2 - + +"
`,
    tags: ["chapter07", "exercise7-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0706',
    title: 'Exercise 7.6: Compare',
    displayName: 'Ex 7.6: Compare',
    description: 'Compare',
    chapter: '07',
    category: 'K&R - Chapter 7',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LEN 1000

int parse_arg_list(int argc, char *argv[]);

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    fprintf(stderr, "Error: invalid arguments.\\n");
    exit(EXIT_FAILURE);
  }

  char *program_name = argv[0];

  FILE *file_1;
  FILE *file_2;

  if ((file_1 = fopen(argv[1], "r")) == NULL)
  {
    fprintf(stderr, "%s: can't open %s.\\n", program_name, argv[1]);
    exit(EXIT_FAILURE);
  }

  if ((file_2 = fopen(argv[2], "r")) == NULL)
  {
    fprintf(stderr, "%s: can't open %s.\\n", program_name, argv[2]);
    exit(EXIT_FAILURE);
  }

  char line_1[MAX_LINE_LEN];
  char line_2[MAX_LINE_LEN];

  size_t line_number = 1;
  while (fgets(line_1, MAX_LINE_LEN, file_1) != NULL && fgets(line_2, MAX_LINE_LEN, file_2) != NULL)
  {
    if (strcmp(line_1, line_2) != 0)
    {
      printf("%s [%zu]: %s", argv[1], line_number, line_1);
      fclose(file_1);

      printf("%s [%zu]: %s", argv[2], line_number, line_2);
      fclose(file_2);
      break;
    }

    ++line_number;
  }

  exit(EXIT_SUCCESS);
}

int parse_arg_list(int argc, char *argv[])
{
  if (argc != 3)
  {
    return 0;
  }

  return 1;
}

// NOTE: run: ./compare file_1.txt file_2.txt
`,
    tags: ["chapter07", "exercise7-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0707',
    title: 'Exercise 7.7: Find',
    displayName: 'Ex 7.7: Find',
    description: 'Find',
    chapter: '07',
    category: 'K&R - Chapter 7',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LEN 1000

typedef enum
{
  false,
  true
} boolean;

boolean parse_arg_list(int argc, char *argv[]);
void find_pattern(char *pattern, FILE *file_p);

char *program_name;

boolean except = false;
boolean number = false;

int pattern_arg_pos = 1;

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    exit(EXIT_FAILURE);
  }

  if (argc - pattern_arg_pos > 1)
  {
    for (int file_arg_pos = pattern_arg_pos + 1; file_arg_pos < argc; file_arg_pos++)
    {
      FILE *file_p;
      if ((file_p = fopen(argv[file_arg_pos], "r")) == NULL)
      {
        fprintf(stderr, "%s: can't open %s.\\n", program_name, argv[file_arg_pos]);
        exit(EXIT_FAILURE);
      }
      printf("%s\\n", argv[file_arg_pos]);
      find_pattern(argv[pattern_arg_pos], file_p);
      fclose(file_p);

      if (file_arg_pos < argc - 1)
      {
        putc('\\n', stdout);
      }
    }
  }
  else
  {
    find_pattern(argv[pattern_arg_pos], stdin);
  }

  exit(EXIT_SUCCESS);
}

boolean parse_arg_list(int argc, char *argv[])
{
  program_name = argv[0];

  if (argc < 3)
  {
    fprintf(stderr, "Usage: %s [-xn]... PATTERN [FILE]...\\n", program_name);
    return false;
  }

  while (--argc > 0 && (*++argv)[0] == '-')
  {
    int c;
    while ((c = *++argv[0]))
    {
      switch (c)
      {
      case 'x':
        except = true;
        break;

      case 'n':
        number = true;
        break;

      default:
        fprintf(stderr, "%s: illegal option %c.\\n", program_name, c);
        return false;
        break;
      }
    }

    ++pattern_arg_pos;
  }

  return true;
}

void find_pattern(char *pattern, FILE *file_p)
{
  size_t line_number = 1;
  char line[MAX_LINE_LEN];
  while (fgets(line, MAX_LINE_LEN, file_p) != NULL)
  {
    if ((strstr(line, pattern) != NULL) != except)
    {
      if (number)
      {
        printf("%ld: ", line_number);
      }
      printf("%s", line);
    }
    ++line_number;
  }
}

// NOTE: run: ./find -n "Some people" file_1.txt file_2.txt
`,
    tags: ["chapter07", "exercise7-7", "kandr", "c-programming"]
  },
  {
    id: 'ex0708',
    title: 'Exercise 7.8: Print',
    displayName: 'Ex 7.8: Print',
    description: 'Print',
    chapter: '07',
    category: 'K&R - Chapter 7',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE_LEN 1000
#define LINES_PER_PAGE 10

typedef enum
{
  false,
  true
} boolean;

boolean parse_arg_list(int argc, char *argv[]);
void print_file(char *file_name);

char *program_name;

int main(int argc, char *argv[])
{
  if (!parse_arg_list(argc, argv))
  {
    exit(EXIT_FAILURE);
  }

  while (--argc > 0)
  {
    print_file(*++argv);

    if (argc != 1)
    {
      putc('\\n', stdout);
    }
  }

  exit(EXIT_SUCCESS);
}

boolean parse_arg_list(int argc, char *argv[])
{
  const char *program_name = argv[0];

  if (argc < 2)
  {
    fprintf(stderr, "Usage: %s [FILE]...\\n", program_name);
    return false;
  }

  return true;
}

void print_file(char *file_name)
{
  FILE *file_p;
  if ((file_p = fopen(file_name, "r")) == NULL)
  {
    fprintf(stderr, "%s: can't open %s.\\n", program_name, file_name);
    exit(EXIT_FAILURE);
  }

  size_t line_number = 1;
  char line[MAX_LINE_LEN];
  while (fgets(line, MAX_LINE_LEN, file_p) != NULL)
  {
    if ((line_number - 1) % LINES_PER_PAGE == 0)
    {
      printf("[%s]: page %zu\\n", file_name, line_number / LINES_PER_PAGE + 1);
    }

    printf("%zu: %s", line_number, line);
    ++line_number;
  }
}

// NOTE: run: ./print ../exercise_7_7/file_1.txt ../exercise_7_7/file_2.txt ./print.c
`,
    tags: ["chapter07", "exercise7-8", "kandr", "c-programming"]
  },
  {
    id: 'ex0709',
    title: 'Exercise 7.9: Isupper',
    displayName: 'Ex 7.9: Isupper',
    description: 'Isupper',
    chapter: '07',
    category: 'K&R - Chapter 7',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int is_upper_v1(int c);
int is_upper_v2(int c);

int main(int argc, char *argv[])
{
  if (is_upper_v1('c'))
  {
    puts("is_upper_v1: This letter is uppercase.");
  }
  else
  {
    puts("is_upper_v1: This letter is lowercase.");
  }

  if (is_upper_v2('c'))
  {
    puts("is_upper_v2: This letter is uppercase.");
  }
  else
  {
    puts("is_upper_v2: This letter is lowercase.");
  }

  exit(EXIT_SUCCESS);
}

int is_upper_v1(int c)
{
  return (c >= 'A' && c <= 'Z');
}

int is_upper_v2(int c)
{
  return (strchr("ABCDEFGHIJKLMNOPQRSTUVWXYZ", c) != NULL);
}
`,
    tags: ["chapter07", "exercise7-9", "kandr", "c-programming"]
  },
  {
    id: 'ex0801',
    title: 'Exercise 8.1: Cat',
    displayName: 'Ex 8.1: Cat',
    description: 'Cat',
    chapter: '08',
    category: 'K&R - Chapter 8',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
#include <unistd.h>
#include <fcntl.h>

#define BUFFER_SIZE 1024

void error(char *format, ...);
void copy_file(int from, int to);

int main(int argc, char *argv[])
{
  if (argc == 1)
  {
    copy_file(0, 1);
  }
  else
  {
    for (int file_index = 1; file_index < argc; ++file_index)
    {
      int file_descriptor;
      if ((file_descriptor = open(argv[file_index], O_RDONLY, 0)) == -1)
      {
        error("Error: could not open the file %s.", argv[file_index]);
        exit(EXIT_FAILURE);
      }

      copy_file(file_descriptor, 1);
    }
  }

  exit(EXIT_SUCCESS);
}

void copy_file(int from, int to)
{
  char buffer[BUFFER_SIZE];

  int n;
  while ((n = read(from, buffer, BUFFER_SIZE)) > 0)
  {
    write(to, buffer, n);
  }
}

void error(char *format, ...)
{
  va_list arg_p;

  va_start(arg_p, format);
  fprintf(stderr, "Error: ");
  vfprintf(stderr, format, arg_p);
  fprintf(stderr, "\\n");
  va_end(arg_p);

  exit(EXIT_FAILURE);
}
`,
    tags: ["chapter08", "exercise8-1", "kandr", "c-programming"]
  },
  {
    id: 'ex0802',
    title: 'Exercise 8.2: Syscalls',
    displayName: 'Ex 8.2: Syscalls',
    description: 'Syscalls',
    chapter: '08',
    category: 'K&R - Chapter 8',
    cCode: `#include <fcntl.h>
#include "syscalls.h"

#define PERMISSIONS 0666 // RW for owners, group, others

FILE _io_buffer[MAX_NR_OF_OPEN_FILES] = {
    {0, (char *)0, (char *)0, {1, 0, 0, 0, 0}, 0}, // stdin
    {0, (char *)0, (char *)0, {0, 1, 0, 0, 0}, 1}, // stdout
    {0, (char *)0, (char *)0, {0, 1, 1, 0, 0}, 2}  // stderr
};

void *malloc(long unsigned int size);
long int lseek(int file_descriptor, long int offset, int whence);
long int read(int file_descriptor, void *buffer, long unsigned int nr_of_bytes);
long int write(int file_descriptor, void *buffer, long unsigned int nr_of_bytes);

int _fill_buffer(FILE *file_p)
{
  int buffer_size;

  if (file_p->flag._READ == 0 || file_p->flag._EOF == 1 || file_p->flag._ERR == 1)
  {
    return EOF;
  }

  buffer_size = (file_p->flag._UNBUF == 1) ? 1 : BUFFER_SIZE;

  if (file_p->base == NULL)
  {
    if ((file_p->base = (char *)malloc(buffer_size)) == NULL)
    {
      return EOF;
    }
  }

  file_p->next_char_pos_p = file_p->base;
  file_p->counter = read(file_p->file_descriptor, file_p->next_char_pos_p, buffer_size);

  if (--file_p->counter < 0)
  {
    if (file_p->counter == -1)
    {
      file_p->flag._EOF = 1;
    }
    else
    {
      file_p->flag._ERR = 1;
    }

    file_p->counter = 0;
    return EOF;
  }

  return (unsigned char)*file_p->next_char_pos_p++;
}

FILE *file_open(char *name, char *mode)
{
  int file_descriptor;
  FILE *file_p;

  if (*mode != 'r' && *mode != 'w' && *mode != 'a')
  {
    return NULL;
  }

  for (file_p = _io_buffer; file_p < _io_buffer + MAX_NR_OF_OPEN_FILES; ++file_p)
  {
    if (file_p->flag._READ == 0 && file_p->flag._WRITE == 0)
    {
      break; // found free slot
    }
  }

  if (file_p >= _io_buffer + MAX_NR_OF_OPEN_FILES)
  {
    return NULL; // no free slots
  }

  if (*mode == 'w')
  {
    file_descriptor = creat(name, PERMISSIONS);
  }
  else if (*mode == 'a')
  {
    if ((file_descriptor = open(name, O_WRONLY, 0)) == -1)
    {
      file_descriptor = creat(name, PERMISSIONS);
    }
    lseek(file_descriptor, 0L, 2);
  }
  else
  {
    file_descriptor = open(name, O_RDONLY, 0);
  }

  if (file_descriptor == -1)
  {
    return NULL; // couldn't access name
  }

  file_p->file_descriptor = file_descriptor;
  file_p->counter = 0;
  file_p->base = NULL;
  file_p->flag._EOF = 0;
  file_p->flag._ERR = 0;
  file_p->flag._READ = (*mode == 'r') ? 1 : 0;
  file_p->flag._WRITE = (*mode == 'r') ? 0 : 1;

  return file_p;
}

int main(void)
{
  FILE *file_p;

  if ((file_p = file_open("syscalls.c", "r")) == NULL)
  {
    write(1, "Error: could not open the file.\\n", 33);
    return EXIT_FAILURE;
  }
  else
  {
    char c;
    while ((c = getc(file_p)) != EOF)
    {
      write(1, &c, 1);
    }
  }

  return EXIT_SUCCESS;
}

// NOTE: Using bit fields leads to more verbose syntax. However, it's more readable.
`,
    tags: ["chapter08", "exercise8-2", "kandr", "c-programming"]
  },
  {
    id: 'ex0803',
    title: 'Exercise 8.3: Syscalls',
    displayName: 'Ex 8.3: Syscalls',
    description: 'Syscalls',
    chapter: '08',
    category: 'K&R - Chapter 8',
    cCode: `#include <fcntl.h>
#include "syscalls.h"

#define PERMISSIONS 0666 // RW for owners, group, others

FILE _io_buffer[MAX_NR_OF_OPEN_FILES] = {
    {0, (char *)0, (char *)0, {1, 0, 0, 0, 0}, 0}, // stdin
    {0, (char *)0, (char *)0, {0, 1, 0, 0, 0}, 1}, // stdout
    {0, (char *)0, (char *)0, {0, 1, 1, 0, 0}, 2}  // stderr
};

void free(void *ptr);
void *malloc(long unsigned int size);
long int lseek(int file_descriptor, long int offset, int whence);
long int read(int file_descriptor, void *buffer, long unsigned int nr_of_bytes);
long int write(int file_descriptor, void *buffer, long unsigned int nr_of_bytes);
int close(int file_descriptor);

int _fill_buffer(FILE *file_p)
{
  int buffer_size;

  if (file_p->flag._READ == 0 || file_p->flag._EOF == 1 || file_p->flag._ERR == 1)
  {
    return EOF;
  }

  buffer_size = (file_p->flag._UNBUF == 1) ? 1 : BUFFER_SIZE;

  if (file_p->base == NULL)
  {
    if ((file_p->base = (char *)malloc(buffer_size)) == NULL)
    {
      return EOF;
    }
  }

  file_p->next_char_pos_p = file_p->base;
  file_p->counter = read(file_p->file_descriptor, file_p->next_char_pos_p, buffer_size);

  if (--file_p->counter < 0)
  {
    if (file_p->counter == -1)
    {
      file_p->flag._EOF = 1;
    }
    else
    {
      file_p->flag._ERR = 1;
    }

    file_p->counter = 0;
    return EOF;
  }

  return (unsigned char)*file_p->next_char_pos_p++;
}

int _flush_buffer(int c, FILE *file_p)
{
  int buffer_size;

  if (file_p->flag._WRITE == 0 || file_p->flag._ERR == 1)
  {
    return EOF;
  }

  buffer_size = (file_p->flag._UNBUF == 1) ? 1 : BUFFER_SIZE;

  if (file_p->base == NULL)
  {
    if ((file_p->base = (char *)malloc(buffer_size)) == NULL)
    {
      return EOF;
    }
  }
  else
  {
    unsigned long nr_of_bytes = file_p->next_char_pos_p - file_p->base;
    if ((write(file_p->file_descriptor, file_p->base, nr_of_bytes)) != nr_of_bytes)
    {
      file_p->flag._ERR = 1;
      return EOF;
    }
  }

  file_p->next_char_pos_p = file_p->base;
  *file_p->next_char_pos_p++ = c;
  file_p->counter = buffer_size - 1;

  return c;
}

int file_flush(FILE *file_p)
{
  if (file_p->flag._WRITE == 0)
  {
    file_p->flag._ERR = 1;
    return EOF;
  }

  if (_flush_buffer('0', file_p) == EOF)
  {
    return EOF;
  }

  file_p->next_char_pos_p = file_p->base;
  file_p->counter = (file_p->flag._UNBUF == 1) ? 1 : BUFFER_SIZE;

  return 0;
}

FILE *file_open(char *name, char *mode)
{
  int file_descriptor;
  FILE *file_p;

  if (*mode != 'r' && *mode != 'w' && *mode != 'a')
  {
    return NULL;
  }

  for (file_p = _io_buffer; file_p < _io_buffer + MAX_NR_OF_OPEN_FILES; ++file_p)
  {
    if (file_p->flag._READ == 0 && file_p->flag._WRITE == 0)
    {
      break; // found free slot
    }
  }

  if (file_p >= _io_buffer + MAX_NR_OF_OPEN_FILES)
  {
    return NULL; // no free slots
  }

  if (*mode == 'w')
  {
    file_descriptor = creat(name, PERMISSIONS);
  }
  else if (*mode == 'a')
  {
    if ((file_descriptor = open(name, O_WRONLY, 0)) == -1)
    {
      file_descriptor = creat(name, PERMISSIONS);
    }
    lseek(file_descriptor, 0L, 2);
  }
  else
  {
    file_descriptor = open(name, O_RDONLY, 0);
  }

  if (file_descriptor == -1)
  {
    return NULL; // couldn't access name
  }

  file_p->file_descriptor = file_descriptor;
  file_p->counter = 0;
  file_p->base = NULL;
  file_p->flag._EOF = 0;
  file_p->flag._ERR = 0;
  file_p->flag._READ = (*mode == 'r') ? 1 : 0;
  file_p->flag._WRITE = (*mode == 'r') ? 0 : 1;

  return file_p;
}

int file_close(FILE *file_p)
{
  if (file_p->flag._WRITE == 1 && file_flush(file_p) == EOF)
  {
    return EOF;
  }

  free(file_p->base);
  file_p->next_char_pos_p = NULL;
  file_p->base = NULL;
  file_p->counter = 0;
  close(file_p->file_descriptor);

  return 0;
}

int main(void)
{
  FILE *file_in_p;
  FILE *file_out_p;

  if ((file_in_p = file_open("syscalls.c", "r")) == NULL)
  {
    write(1, "Error: could not open the file.\\n", 33);
    return EXIT_FAILURE;
  }

  if ((file_out_p = file_open("out.txt", "w")) == NULL)
  {
    write(1, "Error: could not open the file.\\n", 33);
    return EXIT_FAILURE;
  }

  char c;
  while ((c = getc(file_in_p)) != EOF)
  {
    putc(c, file_out_p);
  }
  file_close(file_in_p);
  file_close(file_out_p);

  return EXIT_SUCCESS;
}
`,
    tags: ["chapter08", "exercise8-3", "kandr", "c-programming"]
  },
  {
    id: 'ex0804',
    title: 'Exercise 8.4: Syscalls',
    displayName: 'Ex 8.4: Syscalls',
    description: 'Syscalls',
    chapter: '08',
    category: 'K&R - Chapter 8',
    cCode: `#include <fcntl.h>
#include "syscalls.h"

#define PERMISSIONS 0666 // RW for owners, group, others

FILE _io_buffer[MAX_NR_OF_OPEN_FILES] = {
    {0, (char *)0, (char *)0, {1, 0, 0, 0, 0}, 0}, // stdin
    {0, (char *)0, (char *)0, {0, 1, 0, 0, 0}, 1}, // stdout
    {0, (char *)0, (char *)0, {0, 1, 1, 0, 0}, 2}  // stderr
};

void free(void *ptr);
void *malloc(long unsigned int size);
long int lseek(int file_descriptor, long int offset, int whence);
long int read(int file_descriptor, void *buffer, long unsigned int nr_of_bytes);
long int write(int file_descriptor, void *buffer, long unsigned int nr_of_bytes);
int close(int file_descriptor);

int _fill_buffer(FILE *file_p)
{
  int buffer_size;

  if (file_p->flag._READ == 0 || file_p->flag._EOF == 1 || file_p->flag._ERR == 1)
  {
    return EOF;
  }

  buffer_size = (file_p->flag._UNBUF == 1) ? 1 : BUFFER_SIZE;

  if (file_p->base == NULL)
  {
    if ((file_p->base = (char *)malloc(buffer_size)) == NULL)
    {
      return EOF;
    }
  }

  file_p->next_char_pos_p = file_p->base;
  file_p->counter = read(file_p->file_descriptor, file_p->next_char_pos_p, buffer_size);

  if (--file_p->counter < 0)
  {
    if (file_p->counter == -1)
    {
      file_p->flag._EOF = 1;
    }
    else
    {
      file_p->flag._ERR = 1;
    }

    file_p->counter = 0;
    return EOF;
  }

  return (unsigned char)*file_p->next_char_pos_p++;
}

int _flush_buffer(int c, FILE *file_p)
{
  int buffer_size;

  if (file_p->flag._WRITE == 0 || file_p->flag._ERR == 1)
  {
    return EOF;
  }

  buffer_size = (file_p->flag._UNBUF == 1) ? 1 : BUFFER_SIZE;

  if (file_p->base == NULL)
  {
    if ((file_p->base = (char *)malloc(buffer_size)) == NULL)
    {
      return EOF;
    }
  }
  else
  {
    unsigned long nr_of_bytes = file_p->next_char_pos_p - file_p->base;
    if ((write(file_p->file_descriptor, file_p->base, nr_of_bytes)) != nr_of_bytes)
    {
      file_p->flag._ERR = 1;
      return EOF;
    }
  }

  file_p->next_char_pos_p = file_p->base;
  *file_p->next_char_pos_p++ = c;
  file_p->counter = buffer_size - 1;

  return c;
}

int file_flush(FILE *file_p)
{
  if (file_p->flag._WRITE == 0)
  {
    file_p->flag._ERR = 1;
    return EOF;
  }

  if (_flush_buffer('0', file_p) == EOF)
  {
    return EOF;
  }

  file_p->next_char_pos_p = file_p->base;
  file_p->counter = (file_p->flag._UNBUF == 1) ? 1 : BUFFER_SIZE;

  return 0;
}

FILE *file_open(char *name, char *mode)
{
  int file_descriptor;
  FILE *file_p;

  if (*mode != 'r' && *mode != 'w' && *mode != 'a')
  {
    return NULL;
  }

  for (file_p = _io_buffer; file_p < _io_buffer + MAX_NR_OF_OPEN_FILES; ++file_p)
  {
    if (file_p->flag._READ == 0 && file_p->flag._WRITE == 0)
    {
      break; // found free slot
    }
  }

  if (file_p >= _io_buffer + MAX_NR_OF_OPEN_FILES)
  {
    return NULL; // no free slots
  }

  if (*mode == 'w')
  {
    file_descriptor = creat(name, PERMISSIONS);
  }
  else if (*mode == 'a')
  {
    if ((file_descriptor = open(name, O_WRONLY, 0)) == -1)
    {
      file_descriptor = creat(name, PERMISSIONS);
    }
    lseek(file_descriptor, 0L, 2);
  }
  else
  {
    file_descriptor = open(name, O_RDONLY, 0);
  }

  if (file_descriptor == -1)
  {
    return NULL; // couldn't access name
  }

  file_p->file_descriptor = file_descriptor;
  file_p->counter = 0;
  file_p->base = NULL;
  file_p->flag._EOF = 0;
  file_p->flag._ERR = 0;
  file_p->flag._READ = (*mode == 'r') ? 1 : 0;
  file_p->flag._WRITE = (*mode == 'r') ? 0 : 1;

  return file_p;
}

int file_close(FILE *file_p)
{
  if (file_p->flag._WRITE == 1 && file_flush(file_p) == EOF)
  {
    return EOF;
  }

  free(file_p->base);
  file_p->next_char_pos_p = NULL;
  file_p->base = NULL;
  file_p->counter = 0;
  close(file_p->file_descriptor);

  return 0;
}

int file_seek(FILE *file_p, long offset, int whence)
{
  if (file_p->flag._UNBUF == 0)
  {
    if (file_p->flag._READ == 1)
    {
      file_p->counter = 0;
      file_p->next_char_pos_p = file_p->base;
    }
    else if (file_p->flag._WRITE == 1)
    {
      file_flush(file_p);
    }
  }

  return (lseek(file_p->file_descriptor, offset, whence) < 0);
}

int main(void)
{
  FILE *file_in_p;
  FILE *file_out_p;

  if ((file_in_p = file_open("syscalls.c", "r")) == NULL)
  {
    write(1, "Error: could not open the file.\\n", 33);
    return EXIT_FAILURE;
  }

  if ((file_out_p = file_open("out.txt", "w")) == NULL)
  {
    write(1, "Error: could not open the file.\\n", 33);
    return EXIT_FAILURE;
  }

  if (file_seek(file_in_p, 5, SEEK_SET) == -1)
  {
    return EXIT_FAILURE;
  }

  char c;
  while ((c = getc(file_in_p)) != EOF)
  {
    putc(c, file_out_p);
  }
  file_close(file_in_p);
  file_close(file_out_p);

  return EXIT_SUCCESS;
}
`,
    tags: ["chapter08", "exercise8-4", "kandr", "c-programming"]
  },
  {
    id: 'ex0805',
    title: 'Exercise 8.5: Fsize',
    displayName: 'Ex 8.5: Fsize',
    description: 'Fsize',
    chapter: '08',
    category: 'K&R - Chapter 8',
    cCode: `#include <stdio.h>
#include <string.h>
#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <dirent.h>
#include <time.h>
#include <pwd.h>
#include <grp.h>

#define MAX_PATH_LEN 1024

void fsize(char *name);
void dir_walk(char *dir_name, void (*func)(char *));

void print_file_flags(mode_t st_mode);
void print_file_user(uid_t st_uid);
void print_file_group(gid_t st_gid);
void print_file_size(size_t size);
void print_file_time(time_t time);

int main(int argc, char *argv[])
{
  if (argc == 1)
  {
    fsize(".");
  }
  else
  {
    while (--argc > 0)
    {
      fsize(*++argv);
    }
  }

  return 0;
}

void fsize(char *name)
{
  struct stat buffer;

  if (stat(name, &buffer) == -1)
  {
    fprintf(stderr, "fsize: cannot access %s\\n", name);
    return;
  }

  if ((buffer.st_mode & S_IFMT) == S_IFDIR)
  {
    dir_walk(name, fsize);
  }

  /**
   * off_t st_size         File size, in bytes
   * dev_t st_dev          ID of device containing file
   * ino_t st_ino          File serial number
   * mode_t st_mode        Mode of file (see below)
   * nlink_t st_nlink      Number of hard links
   * uid_t st_uid          User ID of the file
   * gid_t st_gid          Group ID of the file
   * dev_t st_rdev         Device ID
   * time_t st_atime       Time of last access
   * time_t st_mtime       Last data modification time
   * time_t st_ctime       Time of last status change
   * blkcnt_t st_blocks    Blocks allocated for file
   * blksize_t st_blksize  Optimal blocksize for I/O
   */

  // Printed in a similary fashion to ls -l
  print_file_flags(buffer.st_mode);
  printf("%lu ", buffer.st_nlink);
  print_file_user(buffer.st_uid);
  print_file_group(buffer.st_gid);
  print_file_size(buffer.st_size);
  print_file_time(buffer.st_atime);
  printf("%s\\n", name);
}

void dir_walk(char *dir_name, void (*func)(char *))
{
  char name[MAX_PATH_LEN];
  struct dirent *dir_entry;
  DIR *dir;

  if ((dir = opendir(dir_name)) == NULL)
  {
    fprintf(stderr, "dir_walk: cannot open %s\\n", dir_name);
    return;
  }

  while ((dir_entry = readdir(dir)) != NULL)
  {
    if (strcmp(dir_entry->d_name, ".") == 0 || strcmp(dir_entry->d_name, "..") == 0)
    {
      continue; // Skip self and parent.
    }

    if (strlen(dir_name) + strlen(dir_entry->d_name) + 2 > MAX_PATH_LEN)
    {
      fprintf(stderr, "dir_walk: path too long\\n");
    }
    else
    {
      sprintf(name, "%s/%s", dir_name, dir_entry->d_name);
      (*func)(name);
    }
  }

  closedir(dir);
}

void print_file_flags(mode_t st_mode)
{
  printf("%c", ((st_mode & S_IFMT) == S_IFDIR) ? 'd' : '-');
  printf("%c", (st_mode & S_IRUSR) ? 'r' : '-');
  printf("%c", (st_mode & S_IWUSR) ? 'w' : '-');
  printf("%c", (st_mode & S_IXUSR) ? 'x' : '-');
  printf("%c", (st_mode & S_IRGRP) ? 'r' : '-');
  printf("%c", (st_mode & S_IWGRP) ? 'w' : '-');
  printf("%c", (st_mode & S_IXGRP) ? 'x' : '-');
  printf("%c", (st_mode & S_IROTH) ? 'r' : '-');
  printf("%c", (st_mode & S_IWOTH) ? 'w' : '-');
  printf("%c ", (st_mode & S_IXOTH) ? 'x' : '-');
}

void print_file_user(uid_t st_uid)
{
  struct passwd *password;
  password = getpwuid(st_uid);

  if (password == NULL)
  {
    fprintf(stderr, "Error: cannot find user\\n");
    return;
  }

  printf("%s ", password->pw_name);
}

void print_file_group(gid_t st_gid)
{
  struct group *group;
  group = getgrgid(st_gid);

  if (group == NULL)
  {
    fprintf(stderr, "Error: cannot find group\\n");
    return;
  }

  printf("%s ", group->gr_name);
}

void print_file_size(size_t size)
{
  static const char *SIZES[] = {"B", "K", "M", "G"};
  size_t div = 0;
  size_t rem = 0;

  while (size >= 1024 && div < (sizeof SIZES / sizeof *SIZES))
  {
    rem = (size % 1024);
    div++;
    size /= 1024;
  }

  printf("%6.1f%s ", (float)size + (float)rem / 1024.0, SIZES[div]);
}

void print_file_time(time_t time)
{
  char time_str[32];
  strftime(time_str, sizeof(time_str), "%d %b %H:%M", localtime(&time));
  printf("%s ", time_str);
}
`,
    tags: ["chapter08", "exercise8-5", "kandr", "c-programming"]
  },
  {
    id: 'ex0806',
    title: 'Exercise 8.6: Calloc',
    displayName: 'Ex 8.6: Calloc',
    description: 'Calloc',
    chapter: '08',
    category: 'K&R - Chapter 8',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define MIN_NR_OF_UNITS 1024

typedef long Aling;

union header
{
  struct
  {
    union header *free_block_p;
    size_t size;
  } s;
  Aling x; // Force alignment of blocks.
};

typedef union header Header;

static Header base;
static Header *free_p = NULL;

void c_free(void *a_p);
void *c_malloc(size_t nr_of_bytes);
void *c_calloc(size_t nr_of_blocks, size_t block_size);
Header *c_morecore(size_t nr_of_units);

int main(int argc, char *argv[])
{
  char *test_malloc_str_p;
  if ((test_malloc_str_p = c_malloc(27 * sizeof(char))) == NULL)
  {
    printf("Error: malloc faild to allocate the requrested memory.\\n");
    return EXIT_FAILURE;
  }

  strcpy(test_malloc_str_p, "Content from malloc here.");
  printf("%s\\n", test_malloc_str_p);
  c_free(test_malloc_str_p);

  char *test_calloc_str_p;
  if ((test_calloc_str_p = c_calloc(27, sizeof(char))) == NULL)
  {
    printf("Error: calloc faild to allocate the requrested memory.\\n");
    return EXIT_FAILURE;
  }

  strcpy(test_calloc_str_p, "Content from calloc here.");
  printf("%s\\n", test_calloc_str_p);
  c_free(test_calloc_str_p);

  return EXIT_SUCCESS;
}

void c_free(void *a_p)
{
  Header *p;
  Header *b_p = (Header *)a_p - 1;

  for (p = free_p; !(b_p > p && b_p < p->s.free_block_p); p = p->s.free_block_p)
  {
    if (p >= p->s.free_block_p && (b_p > p || b_p < p->s.free_block_p))
    {
      break;
    }
  }

  if (b_p + b_p->s.size == p->s.free_block_p)
  {
    b_p->s.size += p->s.free_block_p->s.size;
    b_p->s.free_block_p = p->s.free_block_p->s.free_block_p;
  }
  else
  {
    b_p->s.free_block_p = p->s.free_block_p;
  }

  if (p + p->s.size == b_p)
  {
    p->s.size += b_p->s.size;
    p->s.free_block_p = b_p->s.free_block_p;
  }
  else
  {
    p->s.free_block_p = b_p;
  }

  free_p = p;
}

void *c_malloc(size_t nr_of_bytes)
{
  Header *p;
  Header *prev_p;
  size_t nr_of_units = (nr_of_bytes + sizeof(Header) - 1) / sizeof(Header);

  if ((prev_p = free_p) == NULL)
  {
    base.s.free_block_p = free_p = prev_p = &base;
    base.s.size = 0;
  }

  for (p = prev_p->s.free_block_p;; prev_p = p, p = p->s.free_block_p)
  {
    if (p->s.size >= nr_of_units)
    {
      if (p->s.size == nr_of_units)
      {
        prev_p->s.free_block_p = p->s.free_block_p;
      }
      else
      {
        p->s.size -= nr_of_units;
        p += p->s.size;
        p->s.size = nr_of_units;
      }

      free_p = prev_p;
      return (void *)(p + 1);
    }

    if (p == free_p)
    {
      if ((p = c_morecore(nr_of_units)) == NULL)
      {
        return NULL;
      }
    }
  }

  return NULL;
}

void *c_calloc(size_t nr_of_blocks, size_t block_size)
{
  void *p = NULL;
  if ((p = c_malloc(nr_of_blocks * block_size)) == NULL)
  {
    return NULL;
  }
  memset(p, 0, nr_of_blocks * block_size);

  return p;
}

Header *c_morecore(size_t nr_of_units)
{
  char *c_p;
  Header *u_p;

  if (nr_of_units < MIN_NR_OF_UNITS)
  {
    nr_of_units = MIN_NR_OF_UNITS;
  }

  c_p = sbrk(nr_of_units * sizeof(Header));
  if (c_p == (char *)-1)
  {
    return NULL;
  }

  u_p = (Header *)c_p;
  u_p->s.size = nr_of_units;
  c_free((void *)(u_p + 1));

  return free_p;
}
`,
    tags: ["chapter08", "exercise8-6", "kandr", "c-programming"]
  },
  {
    id: 'ex0807',
    title: 'Exercise 8.7: Malloc Free',
    displayName: 'Ex 8.7: Malloc Free',
    description: 'Malloc Free',
    chapter: '08',
    category: 'K&R - Chapter 8',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>
#include <unistd.h>

#define MIN_NR_OF_UNITS 1024

typedef long Aling;

union header
{
  struct
  {
    union header *free_block_p;
    size_t size;
  } s;
  Aling x; // Force alignment of blocks.
};

typedef union header Header;

static Header base;
static Header *free_p = NULL;

void c_free(void *a_p);
void *c_malloc(size_t nr_of_bytes);
void *c_calloc(size_t nr_of_blocks, size_t block_size);
Header *c_morecore(size_t nr_of_units);

int main(int argc, char *argv[])
{
  char *test_malloc_str_p;
  if ((test_malloc_str_p = c_malloc(27 * sizeof(char))) == NULL)
  {
    printf("Error: malloc faild to allocate the requrested memory.\\n");
    return EXIT_FAILURE;
  }

  strcpy(test_malloc_str_p, "Content from malloc here.");
  printf("%s\\n", test_malloc_str_p);
  c_free(test_malloc_str_p);

  char *test_calloc_str_p;
  if ((test_calloc_str_p = c_calloc(27, sizeof(char))) == NULL)
  {
    printf("Error: calloc faild to allocate the requrested memory.\\n");
    return EXIT_FAILURE;
  }

  strcpy(test_calloc_str_p, "Content from calloc here.");
  printf("%s\\n", test_calloc_str_p);
  c_free(test_calloc_str_p);

  return EXIT_SUCCESS;
}

void c_free(void *a_p)
{
  Header *p;
  Header *b_p = (Header *)a_p - 1;

  if (b_p->s.size == 0 || b_p->s.size == UINT_MAX - MIN_NR_OF_UNITS)
  {
    fprintf(stderr, "Error(free): invalid block size %zu\\n", b_p->s.size);
    return;
  }

  for (p = free_p; !(b_p > p && b_p < p->s.free_block_p); p = p->s.free_block_p)
  {
    if (p >= p->s.free_block_p && (b_p > p || b_p < p->s.free_block_p))
    {
      break;
    }
  }

  if (b_p + b_p->s.size == p->s.free_block_p)
  {
    b_p->s.size += p->s.free_block_p->s.size;
    b_p->s.free_block_p = p->s.free_block_p->s.free_block_p;
  }
  else
  {
    b_p->s.free_block_p = p->s.free_block_p;
  }

  if (p + p->s.size == b_p)
  {
    p->s.size += b_p->s.size;
    p->s.free_block_p = b_p->s.free_block_p;
  }
  else
  {
    p->s.free_block_p = b_p;
  }

  free_p = p;
}

void *c_malloc(size_t nr_of_bytes)
{
  Header *p;
  Header *prev_p;

  if (nr_of_bytes == 0 || nr_of_bytes >= UINT_MAX - MIN_NR_OF_UNITS)
  {
    fprintf(stderr, "Error(malloc): invalid size %zu\\n", nr_of_bytes);
    return NULL;
  }

  size_t nr_of_units = (nr_of_bytes + sizeof(Header) - 1) / sizeof(Header);

  if ((prev_p = free_p) == NULL)
  {
    base.s.free_block_p = free_p = prev_p = &base;
    base.s.size = 0;
  }

  for (p = prev_p->s.free_block_p;; prev_p = p, p = p->s.free_block_p)
  {
    if (p->s.size >= nr_of_units)
    {
      if (p->s.size == nr_of_units)
      {
        prev_p->s.free_block_p = p->s.free_block_p;
      }
      else
      {
        p->s.size -= nr_of_units;
        p += p->s.size;
        p->s.size = nr_of_units;
      }

      free_p = prev_p;
      return (void *)(p + 1);
    }

    if (p == free_p)
    {
      if ((p = c_morecore(nr_of_units)) == NULL)
      {
        return NULL;
      }
    }
  }

  return NULL;
}

void *c_calloc(size_t nr_of_blocks, size_t block_size)
{
  void *p = NULL;
  if ((p = c_malloc(nr_of_blocks * block_size)) == NULL)
  {
    return NULL;
  }
  memset(p, 0, nr_of_blocks * block_size);

  return p;
}

Header *c_morecore(size_t nr_of_units)
{
  char *c_p;
  Header *u_p;

  if (nr_of_units < MIN_NR_OF_UNITS)
  {
    nr_of_units = MIN_NR_OF_UNITS;
  }

  c_p = sbrk(nr_of_units * sizeof(Header));
  if (c_p == (char *)-1)
  {
    return NULL;
  }

  u_p = (Header *)c_p;
  u_p->s.size = nr_of_units;
  c_free((void *)(u_p + 1));

  return free_p;
}
`,
    tags: ["chapter08", "exercise8-7", "kandr", "c-programming"]
  },
  {
    id: 'ex0808',
    title: 'Exercise 8.8: Bfree',
    displayName: 'Ex 8.8: Bfree',
    description: 'Bfree',
    chapter: '08',
    category: 'K&R - Chapter 8',
    cCode: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>
#include <unistd.h>

#define MIN_NR_OF_UNITS 1024

typedef long Aling;

union header
{
  struct
  {
    union header *free_block_p;
    size_t size;
  } s;
  Aling x; // Force alignment of blocks.
};

typedef union header Header;

static Header base;
static Header *free_p = NULL;

void c_free(void *a_p);
void c_bfree(void *a_p, size_t block_size);
void *c_malloc(size_t nr_of_bytes);
void *c_calloc(size_t nr_of_blocks, size_t block_size);
Header *c_morecore(size_t nr_of_units);

int main(int argc, char *argv[])
{
  char *test_malloc_str_p;
  if ((test_malloc_str_p = c_malloc(27 * sizeof(char))) == NULL)
  {
    printf("Error: malloc faild to allocate the requrested memory.\\n");
    return EXIT_FAILURE;
  }

  strcpy(test_malloc_str_p, "Content from malloc here.");
  printf("%s\\n", test_malloc_str_p);
  c_free(test_malloc_str_p);

  char *test_calloc_str_p;
  if ((test_calloc_str_p = c_calloc(27, sizeof(char))) == NULL)
  {
    printf("Error: calloc faild to allocate the requrested memory.\\n");
    return EXIT_FAILURE;
  }

  strcpy(test_calloc_str_p, "Content from calloc here.");
  printf("%s\\n", test_calloc_str_p);
  c_free(test_calloc_str_p);

  char test_bfree[1024] = "Some test content here.";
  c_bfree(test_bfree, 1024);

  return EXIT_SUCCESS;
}

void c_free(void *a_p)
{
  Header *p;
  Header *b_p = (Header *)a_p - 1;

  if (b_p->s.size == 0 || b_p->s.size == UINT_MAX - MIN_NR_OF_UNITS)
  {
    fprintf(stderr, "Error(free): invalid block size %zu\\n", b_p->s.size);
    return;
  }

  for (p = free_p; !(b_p > p && b_p < p->s.free_block_p); p = p->s.free_block_p)
  {
    if (p >= p->s.free_block_p && (b_p > p || b_p < p->s.free_block_p))
    {
      break;
    }
  }

  if (b_p + b_p->s.size == p->s.free_block_p)
  {
    b_p->s.size += p->s.free_block_p->s.size;
    b_p->s.free_block_p = p->s.free_block_p->s.free_block_p;
  }
  else
  {
    b_p->s.free_block_p = p->s.free_block_p;
  }

  if (p + p->s.size == b_p)
  {
    p->s.size += b_p->s.size;
    p->s.free_block_p = b_p->s.free_block_p;
  }
  else
  {
    p->s.free_block_p = b_p;
  }

  free_p = p;
}

void c_bfree(void *p, size_t block_size)
{
  Header *b_p;

  if (block_size < MIN_NR_OF_UNITS)
  {
    fprintf(stderr, "Error: block must be at least of size %d\\n", MIN_NR_OF_UNITS);
    return;
  }

  b_p = (Header *)p;
  b_p->s.size = (block_size / sizeof(Header)) - 1;
  c_free((void *)(b_p + 1));
}

void *c_malloc(size_t nr_of_bytes)
{
  Header *p;
  Header *prev_p;

  if (nr_of_bytes == 0 || nr_of_bytes >= UINT_MAX - MIN_NR_OF_UNITS)
  {
    fprintf(stderr, "Error(malloc): invalid size %zu\\n", nr_of_bytes);
    return NULL;
  }

  size_t nr_of_units = (nr_of_bytes + sizeof(Header) - 1) / sizeof(Header);

  if ((prev_p = free_p) == NULL)
  {
    base.s.free_block_p = free_p = prev_p = &base;
    base.s.size = 0;
  }

  for (p = prev_p->s.free_block_p;; prev_p = p, p = p->s.free_block_p)
  {
    if (p->s.size >= nr_of_units)
    {
      if (p->s.size == nr_of_units)
      {
        prev_p->s.free_block_p = p->s.free_block_p;
      }
      else
      {
        p->s.size -= nr_of_units;
        p += p->s.size;
        p->s.size = nr_of_units;
      }

      free_p = prev_p;
      return (void *)(p + 1);
    }

    if (p == free_p)
    {
      if ((p = c_morecore(nr_of_units)) == NULL)
      {
        return NULL;
      }
    }
  }

  return NULL;
}

void *c_calloc(size_t nr_of_blocks, size_t block_size)
{
  void *p = NULL;
  if ((p = c_malloc(nr_of_blocks * block_size)) == NULL)
  {
    return NULL;
  }
  memset(p, 0, nr_of_blocks * block_size);

  return p;
}

Header *c_morecore(size_t nr_of_units)
{
  char *c_p;
  Header *u_p;

  if (nr_of_units < MIN_NR_OF_UNITS)
  {
    nr_of_units = MIN_NR_OF_UNITS;
  }

  c_p = sbrk(nr_of_units * sizeof(Header));
  if (c_p == (char *)-1)
  {
    return NULL;
  }

  u_p = (Header *)c_p;
  u_p->s.size = nr_of_units;
  c_free((void *)(u_p + 1));

  return free_p;
}
`,
    tags: ["chapter08", "exercise8-8", "kandr", "c-programming"]
  }
]

export default programs
