---
slug: "java-io-stream"
title: "Java I/O Stream"
date: "2020-05-17T19:05:09.370Z"
published: true
excerpt: "Working with Java I/O Steams"
author: "Chris Bailey"
tags:
  - "java"
  - "college"
  - "dev"
---

### 💁 Basics

Java IO Steams are flows of data you can either read from or write to.

```java
Scanner s = new Scanner(System.in);
System.out.println();
```

`System.in` is an example of a stream that reads data from a user's keyboard.

Java contains the class `java.io.InputStream` which is the base class for all input streams. An InputStream is a `Byte Stream`, which means all data will be read in byte by byte.

### 🦦 Combining Streams

- 👓 Reader: wrapper around streams that allows you to read `chars`

- 📚 BufferedReader: wrapper that can be used around `Reader`. This allows you to reader more than one character at once, reducing system calls and improving performance (in most cases)

```java
BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
```

- 📃 Scanner: used to read specific data (int, long, double), and has methods like the following to make it easier `nextInt()`,`nextDouble()`, `nextLine()`, [etc]([https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html#method.summary). `Scanner` will add overhead to your application and should be used accordingly.

### 📖 Reading From Files

`FileInputStream` gathers data from a file byte by byte. It is intended to be used for gathering raw bytes from things like images. For handling text encoding wrapping it with an `InputStreamReader` will take care of this for you. Much like `InputStream` we can wrap this with a `BufferedReader` to allow the reading of multiple characters rather than going one by one.

This was thought of in advanced and we have been provided with the `FileReader` class that combines `FileInputStream` and `InputStreamReader` for us already.

#### FileReader

This example will read each character in the provided file (example.txt) in this example.  Once we've grabbed the contents of the file we go through byte by byte by assigning the current byte to `c` with the `.read()` method, and looping until it returns -1.  Since we are only reading bytes to print these out to the console we'll need to cast `c` to a `char`.  Once we are finished reading the stream we'll need to close it by issuing `fio.close()` inside the `finally` block. When ran each character in the file is printed to console on its own line due to using `System.out.println`.

```java
// FileIOExample.java
package dev.chrisbailey;

import java.io.FileReader;

public class FileIOExample {
  public static void main(String[] args) throws IOException {
    FileReader fio = null;
    int c;

    try {
      fio = new FileReader("example.txt");
      c = fio.read();
      while(c != -1) {
        System.out.println((char)c); //print out the current character by casting the current byte to a char
        c = fio.read();
      }
    } catch (FileNotFoundException e) {
      System.out.println("File not found");
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      fio.close(); // always close stream when finished.
    }
  }
  
}
```

```sh
# console output
m
y

n
a
m
e

i
s

c
h
r
i
s
```

#### Scanner

To use `Scanner` we first created a new instance of `Scanner` that we fed a `FileInputStream` to.  Rather than keeping track of the byte count for our looping with the scanner, we can check if there's anything left to read with the `hasNext()` method.  When then print out each chunk of gather data by sending `next()` to be printed.  Unlike `FileReader` we are globbing chunks of data rather than individual bytes, so our output is not one byte per line, but rather one word per line.

```java
// FileIOExample.java
package dev.chrisbailey;

import java.io.*;
import java.util.Scanner;

public class FileIOExample {
  public static void main(String[] args) throws IOException {
    Scanner s = null;

    try {
      s = new Scanner(new FileInputStream("example.txt"));
      while(s.hasNet()) {
        System.out.println(s.next());
      }
    } catch (FileNotFoundException e) {
      System.out.println("File not found");
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      s.close(); // always close stream when finished.
    }
  }
  
}
```

```sh
# output from FileIOExample.java
my
name
is
chris
```

### 📝 Writing To Files

#### 🗃 FileWriter

`java.io.FileWriter` allows us to write characters to a file it works similarly to `java.io.FileOutputStream`, but by writing characters rather than bytes.  In this example, we're reading bytes from a file using `java.io.FileReader` then in our while loop casting each byte to characters in our file writer until we've reached the end of the input file.  

```java
// FileIOExample.java
package dev.chrisbailey;

import java.io.FileReader;
import java.io.FileWriter;

public class FileIOExample {
  public static void main(String[] args) throws IOException {
    Scanner s = null;
    FileWriter fio = null;
    int c;

    try {
      fin = new FileReader("example.txt");
      fio = new FileWriter("output.txt");
      c = fin.read();

      while(c != -1) {
        fio.write((char)c);
        c = fin.read();
      }
    } catch (FileNotFoundException e) {
      System.out.println("File not found");
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      fin.close(); // always close stream when finished.
      fio.close();
    }
  }
  
}
```

```sh
#output.txt
my name is chris
```

#### 🖨 PrintWriter

`java.io.PrintWriter` allows us to write formatted data to files.  It gives us the ability to write primitives such as int, long, or double as formatted text rather than their byte value.  For our basic example, we're reading in a file from our "example.txt" file with `java.util.Scanner`, and then piping each line to our `PrintWriter` to send the text off to the designated file ("output.txt").  We used `println` to write out the data sent from the scanner, which gave us one word per line in the output file.  By default this will overwrite the file every time it's run, we can change this to append text by adding `true` as the second parameter in our `FileOutputStream`.

```java
// FileIOExample.java
package dev.chrisbailey;

import java.io.*;
import java.util.Scanner;

public class FileIOExample {
  public static void main(String[] args) throws IOException {
    PrintWriter po = null;
    Scanner s = null;

    try {
      po = new PrintWriter(new FileOutputStream("output.txt"));
      s = new Scanner(new FileInputStream("example.txt"));
      while(s.hasNext()) {
        po.println(s.next());
      }
    } catch (FileNotFoundException e) {
      System.out.println("File not found");
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      s.close();
      po.close();
    }
  }
  
}
```

```sh
#output.txt
my
name
is
chris
```

We can use `PrintWriter` with other file streams as well, such as `FileWriter`
