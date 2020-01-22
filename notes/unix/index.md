---
layout: slides
title: Unix Intro
week: 1
---

<div class="slide">
	<h2>Terminal</h2>
	<p><note>Terminal</note> is a Mac application that emulates a terminal or text-based controller for the operating system.</p>
	<p>The command line interface is useful for developers using software that requires command line interface or is extended through command line, including software we'll be using like <note>Git</note> and <note>Sass</note>.</p>
	<p>The Terminal uses a language called <note>Unix</note> to issue commands to the operating system.</p>
</div>

<div class="slide">
	<img src="terminal.png" alt="">
</div>

<div class="slide">
	<h2>Commands</h2>
	<p>In the Terminal, commands are made by typing the command shorthand and hitting Enter/Return <span class="key">R</span>.</p>
	<p>Many commands have arguments, or extra information for the command.  The arguments are separated by spaces.</p>
	<pre><code>$ command argument
$ cd Desktop
$ mkdir mmp350
$ touch index.html</code></pre>

</div>

<div class="slide">
	<h2>Essential Unix commands</h2>
	<table class="code">
		<tr>
			<th>Command</th>
			<th>Function</th>
			<th>Examples</th>
		</tr>
		<tr>
			<td>cd &lt;path&gt;</td>
			<td>change directory</td>
			<td>cd Desktop <br>
			cd mmp350 <br>
			cd ..</td>
		</tr>
		<tr>
			<td>ls &lt;path&gt;</td>
			<td>list contents of directory</td>
			<td>ls <br>
			ls -l <br>
			ls -a <br>
			ls /Applications/</td>
		</tr>
		<tr>
			<td>mkdir</td>
			<td>make a new directory</td>
			<td>mkdir my-project</td>
		</tr>
		<tr>
			<td>touch</td>
			<td>create a file</td>
			<td>touch index.html<br>
			touch css/style.css</td>
		</tr>
		<tr>
			<td>rm</td>
			<td>remove a file<br>
			note: file does <strong>not</strong> go to trash. <br> 
			it's gone forever.</td>
			<td>rm my-project/file.txt</td>
		</tr>
		<tr>
			<td>cp &lt;path&gt; &lt;path&gt;</td>
			<td>copy a file</td>
			<td>cp my-project/css/style.css css/style.css</td>
		</tr>
		<tr>
			<td>mv</td>
			<td>move a file</td>
			<td>mv my-app/style.css new-app/style.css</td>
		</tr>
	</table>
</div>

<div class="slide">
	<h2>Resources</h2>
	<ul>
		<li><a href="https://files.fosswire.com/2007/08/fwunixref.pdf" target="_blank">Unix cheat sheet </a></li>
		<li><a href="https://ss64.com/osx/" target="_blank">Full reference </a></li>
		<li><a href="https://www.lynda.com/Mac-OS-X-10-6-tutorials/Unix-for-Mac-OS-X-Users/78546-2.html" target="_blank">Lynda: Unix for Mac OS X Users</a></li>
	</ul>
</div>