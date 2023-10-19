#!/bin/sh

export TERM="xterm-256color"
export LANG="en_US.UTF-8"

export PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '

# history
HISTSIZE=1000
HISTFILESIZE=2000
HISTCONTROL=ignoreboth  # no duplicate lines or lines starting with space in the history.

# list dotfiles first when using the ls command
export LC_COLLATE=C

# aliases
alias grep='grep --color=auto'
alias dir="dir --color=auto"
alias mkdir="mkdir -pv"
alias cp="cp -iv"
alias mv="mv -iv"
alias rm="rm -vI"
alias v="vim"

# shortcuts
alias fuck='eval "sudo $(history -n | tail -1)"'     # run the last command with sudo


# package manager
alias ls='ls --group-directories-first --color=always'
alias ll='ls -lh --group-directories-first --color=always'
alias la='ls -lah --group-directories-first --color=always'

# python aliases
alias python='python3'
alias p='python'
alias ip='ipython'
alias pv='python -V'
alias ppth='python -c "import sys; print(sys.executable)"'
alias jn='jupyter notebook'
alias jl='jupyter lab'