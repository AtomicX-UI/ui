module.exports = {
    branches: ["main", { name: "next", prerelease: true }],
    plugins: [
        "@semantic-release/commit-analyzer",
        {
          parserOpts: {
            headerPattern: /^(\w+)(?:\((.*)\))?!?: (.*)$/,
            headerCorrespondence: ["type", "scope", "subject"],
            noteKeywords: ["BREAKING CHANGE"],
            revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
            revertCorrespondence: ["header", "hash"],
          },
          releaseRules: [
            { type: "feature", release: "minor" }, // Allow "feature" instead of "feat"
          ],
        },
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        "@semantic-release/github",
      ],
};
