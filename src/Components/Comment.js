import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    comment: {
        borderBottom: "2px solid black",
        background: "rgba(225,225,225,0.75)",
        minHeight: "50px",
        padding: "1rem"
    },

    comment__date: {
        fontSize: "67.5%",
        fontWeight: "bold"
    }
});

const Comment = ({ text, dateTimeFormatted }) => (
    <div className={css(styles.comment) + " row"}>
        <div className="small-10 columns">
            <p>
                {text}
            </p>
            <span className={css(styles.comment__date)}>{dateTimeFormatted}</span>
        </div>
    </div>
);

export default Comment