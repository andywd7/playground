.class-name {
    $variables: 10px; // Class specific variables

    @extend .other-class; // Followed by extends
    @include border-radius(); // Then any mixins

    background: red; // After that, standard declarations
    font-weight: bold;

    &:hover { // Any pseudo elements
        color: blue;
    }

    .class-sub { // And any child elements
        color: blue;
    }

    .parent & { // Contextual overrides
        font-weight: 100;
    }

    @include breakpoint($bp-lg) { //  Media Queries come last
        background: salmon;
        .class-sub {
            color: orange;
        }
    }
}