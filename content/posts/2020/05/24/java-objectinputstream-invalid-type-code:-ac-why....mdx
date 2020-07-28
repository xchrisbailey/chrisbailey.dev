---
slug: 'java-objectinputstream-invalid-type'
title: 'java objectinputstream invalid type code: ac, why...'
date: '2020-05-24T17:55:26.301Z'
published: true
excerpt: 'classwork solution to corrupting the datas'
author: 'Chris Bailey'
tags:
  - 'java'
---

While using `java•ObjectInputStream` and `java•ObjectOutputStream` together for a class project I continually ran into `java•java objectinputstream invalid type code: ac` which was becoming endlessly annoying. Initially, I was attempting to use try-with-resources blocks to limit my need for finally catches, but this proved to be the main culprit in my issue.

```java
public static void main(String[] args) {
  try (FileOutputStream fo = new FileOutputStream(db)) {
    try (ObjectOutputStream oo = new ObjectOutputStream(fo)) {
      // do stuff
    }
  }
}

public static void StuffDoer() {
  try (FileInputStream fi = new FileInputStream(db)) {
    try (ObjectInputStream oi = new ObjectInputStream(fi)) {
      // read stuff
    }
  }
}
```

From what I've been able to gather this has to with `java•ObjectOutputStream` writing the headers and sharing between the two, but only while it has not been closed, once closed and we attempt to open a second/new stream it's no longer able to handle the binary data that has been written.

Since I'm still a 🐶 in this Java stuff, research was needed and stackoverflow seems to have provided. [this](https://stackoverflow.com/a/57397429) answer was what I found to work best for my use cases. It creates a class extending `java•ObjectOutputStream` that basically avoids writing the headers each time as far as I can tell, it's still kind of magic to me.

```java
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.OutputStream;

public class AppendableObjectOutputStream extends ObjectOutputStream {

    private boolean append;
    private boolean initialized;
    private DataOutputStream dout;

    protected AppendableObjectOutputStream(boolean append) throws IOException, SecurityException {
        super();
        this.append = append;
        this.initialized = true;
    }

    public AppendableObjectOutputStream(OutputStream out, boolean append) throws IOException {
        super(out);
        this.append = append;
        this.initialized = true;
        this.dout = new DataOutputStream(out);
        this.writeStreamHeader();
    }

    @Override
    protected void writeStreamHeader() throws IOException {
        if (!this.initialized || this.append) return;
        if (dout != null) {
            dout.writeShort(STREAM_MAGIC);
            dout.writeShort(STREAM_VERSION);
        }
    }

}
```

Usage of the class will be nearly same as just outright using `java•ObjectOutputStream`

```java
File file = new File('some.dat');
boolean append = file.exists();
try ( FileOutputStream fo = new FileOutputStream(file, append);
  AppendableObjectOutputStream ao = new AppendableObjectOutputStream(fo, append);) {
    oo.writeObject(...);
  } catch(...) {
    // catch some stuff
  }
```
