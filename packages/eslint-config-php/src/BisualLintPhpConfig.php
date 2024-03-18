<?php

declare(strict_types=1);

namespace BisualEslintPhpConfig;

use PhpCsFixer\Config;
use PhpCsFixer\Finder;

class BisualEslintPhpConfig {
  public static function getConfig(): Config {
    // https://mlocati.github.io/php-cs-fixer-configurator/#version:3.51
    $rules = [
      // REGLAS
      // Inside class or interface element self should be preferred to the class name itself. Warning:  Risky when using dynamic calls like get_called_class() or late static binding.
      'self_accessor' => true,
      // Forces PHPDoc tags to be either regular annotations or inline.
      'phpdoc_tag_type' => true,
      // Each line of multi-line DocComments must have an asterisk [PSR-5] and must be aligned with the first one.
      'align_multiline_comment' => ['comment_type' => 'phpdocs_like'],
      // Each element of an array must be indented exactly once.
      'array_indentation' => true,
      // Converts simple usages of array_push($x, $y); to $x[] = $y;. Warning:  Risky when the function array_push is overridden.
      'array_push' => true,
      // PHP arrays should be declared using the configured syntax.
      'array_syntax' => ['syntax' => 'short'],
      // Binary operators should be surrounded by space as configured.
      'binary_operator_spaces' => [
          'default' => 'single_space',
          'operators' => [
              '=>' => 'single_space',
              '===' => 'align_single_space_minimal',
          ],
      ],
      // There MUST be one blank line after the namespace declaration.
      'blank_line_after_namespace' => true,
      // Ensure there is no code on the same line as the PHP open tag and it is followed by a blank line.
      'blank_line_after_opening_tag' => true,
      // An empty line feed must precede any configured statement.
      'blank_line_before_statement' => [
          'statements' => ['break', 'continue', 'declare', 'return', 'throw', 'try'],
      ],
      // Putting blank lines between use statement groups.
      'blank_line_between_import_groups' => true,
      // Controls blank lines before a namespace declaration.
      'blank_lines_before_namespace' => true,
      // Braces must be placed as configured.
      'braces_position' => [
          'functions_opening_brace' => 'same_line',
          'classes_opening_brace' => 'same_line',
          'allow_single_line_empty_anonymous_classes' => true,
          'allow_single_line_anonymous_functions' => true,
      ],
      // A single space or none should be between cast and variable.
      'cast_spaces' => true,
      // Class, trait and interface elements must be separated with one or none blank line.
      'class_attributes_separation' => [
          'elements' => [
              'const' => 'one',
              'method' => 'one',
              'property' => 'one',
          ],
      ],
      // Whitespace around the keywords of a class, trait, enum or interfaces definition should be one space.
      'class_definition' => [
          'multi_line_extends_each_single_line' => true,
          'single_item_single_line' => true,
          'single_line' => true,
      ],
      // When referencing an internal class it must be written using the correct casing.
      'class_reference_name_casing' => true,
      // Namespace must not contain spacing, comments or PHPDoc.
      'clean_namespace' => true,
      // Using isset($var) && multiple times should be done in one call.
      'combine_consecutive_issets' => true,
      // Calling unset on multiple items should be done in one call.
      'combine_consecutive_unsets' => true,
      // Replace multiple nested calls of dirname by only one call with second $level parameter. Requires PHP >= 7.0. Warning: Risky when the function dirname is overridden.
      'combine_nested_dirname' => true,
      // Remove extra spaces in a nullable type declaration.
      'compact_nullable_type_declaration' => true,
      // Concatenation should be spaced according to configuration.
      'concat_space' => [
          'spacing' => 'none',
      ],
      // The PHP constants true, false, and null MUST be written using the correct casing.
      'constant_case' => ['case' => 'lower'],
      // Control structure continuation keyword must be on the configured line.
      'control_structure_continuation_position' => [
          'position' => 'same_line',
      ],
      // Equal sign in declare statement should be surrounded by spaces or not following configuration.
      'declare_equal_normalize' => true,
      // There must not be spaces around declare statement parentheses.
      'declare_parentheses' => true,
      // Fuerza que sea estrictos los parametros de las funciones
      // Force strict types declaration in all files. Requires PHP >= 7.0. Warning:  Forcing strict types will stop non strict code from working.
      'declare_strict_types' => true,
      // Doctrine annotations without arguments must use the configured syntax.
      'doctrine_annotation_braces' => true,
      // The keyword elseif should be used instead of else if so that all control keywords look like single words.
      'elseif' => true,
      // Empty loop-body must be in configured style.
      'empty_loop_body' => [
          'style' => 'braces',
      ],
      // Empty loop-condition must be in configured style.
      'empty_loop_condition' => true,
      // PHP code MUST use only UTF-8 without BOM (remove BOM).
      'encoding' => true,
      // Replace deprecated ereg regular expression functions with preg. Warning:  Risky if the ereg function is overridden.
      'ereg_to_preg' => true,
      // Add curly braces to indirect variables to make them clear to understand. Requires PHP >= 7.0.
      'explicit_indirect_variable' => true,
      // Converts implicit variables into explicit ones in double-quoted strings or heredoc syntax.
      'explicit_string_variable' => true,
      // All classes must be final, except abstract ones and Doctrine entities. No exception and no configuration are intentional. Beside Doctrine entities and of course abstract classes, there is no single reason not to declare all classes final. If you want to subclass a class, mark the parent class as abstract and create two child classes, one empty if necessary: you'll gain much more fine grained type-hinting. If you need to mock a standalone class, create an interface, or maybe it's a value-object that shouldn't be mocked at all. If you need to extend a standalone class, create an interface and use the Composite pattern. If you aren't ready yet for serious OOP, go with FinalInternalClassFixer, it's fine. Warning: Risky when subclassing non-abstract classes.
      'final_class' => true,
      // All public methods of abstract classes should be final. Warning:  Risky when overriding public methods of abstract classes.
      'final_public_method_for_abstract_class' => true,
      // PHP code must use the long <?php tags or short-echo <?= tags and not other tag variations.
      'full_opening_tag' => true,
      // Removes the leading part of fully qualified symbol references if a given symbol is imported or belongs to the current namespace.
      'fully_qualified_strict_types' => true,
      // Spaces should be properly placed in a function declaration.
      'function_declaration' => true,
      // Ensure single space between a variable and its type declaration in function arguments and properties.
      'type_declaration_spaces' => [
          'elements' => ['function', 'property'],
      ],
      // Renames PHPDoc tags.
      'general_phpdoc_tag_rename' => true,
      // Replace get_class calls on object variables with class keyword syntax. Warning:  Risky if the get_class function is overridden.
      'get_class_to_class_keyword' => true,
      // Imports or fully qualifies global classes/functions/constants.
      'global_namespace_import' => true,
      // Heredoc/nowdoc content must be properly indented.
      'heredoc_indentation' => [
          'indentation' => 'start_plus_one',
      ],
      // Convert heredoc to nowdoc where possible.
      'heredoc_to_nowdoc' => true,
      // Function implode must be called with 2 arguments in the documented order. Warning: Risky when the function implode is overridden.
      'implode_call' => true,
      // Include/Require and file path should be divided with a single space. File path should not be placed within parentheses.
      'include' => true,
      // Pre- or post-increment and decrement operators should be used if possible.
      'increment_style' => ['style' => 'post'],
      // Code MUST use configured indentation type.
      'indentation_type' => true,
      // Integer literals must be in correct case.
      'integer_literal_case' => true,
      // Replaces is_null($var) expression with null === $var. Warning:  Risky when the function is_null is overridden.
      'is_null' => true,
      // Lambda must not import variables it doesn't use.
      'lambda_not_used_import' => true,
      // All PHP files must use same line ending.
      'line_ending' => true,
      // Ensure there is no code on the same line as the PHP open tag.
      'linebreak_after_opening_tag' => true,
      // List (array destructuring) assignment should be declared using the configured syntax. Requires PHP >= 7.1.
      'list_syntax' => [
          'syntax' => 'short',
      ],
      // Cast should be written in lower case.
      'lowercase_cast' => true,
      // PHP keywords MUST be in lower case.
      'lowercase_keywords' => true,
      // Class static references self, static and parent MUST be in lower case.
      'lowercase_static_reference' => true,
      // Magic constants should be referred to using the correct casing.
      'magic_constant_casing' => true,
      // Magic method definitions and calls must be using the correct casing.
      'magic_method_casing' => true,
      // In method arguments and method call, there MUST NOT be a space before each comma and there MUST be one space after each comma. Argument lists MAY be split across multiple lines, where each subsequent line is indented once. When doing so, the first item in the list MUST be on the next line, and there MUST be only one argument per line.
      'method_argument_space' => true,
      // Method chaining MUST be properly indented. Method chaining with different levels of indentation is not supported.
      'method_chaining_indentation' => true,
      // Replace strpos() calls with str_starts_with() or str_contains() if possible. Warning:  Risky if strpos, str_starts_with or str_contains functions are overridden.
      'modernize_strpos' => true,
      // Replaces intval, floatval, doubleval, strval and boolval function calls with according type casting operator.
      'modernize_types_casting' => true,
      // DocBlocks must start with two asterisks, multiline comments must start with a single asterisk, after the opening slash. Both must end with a single asterisk before the closing slash.
      'multiline_comment_opening_closing' => true,
      // Forbid multi-line whitespace before the closing semicolon or move the semicolon to the new line for chained calls.
      'multiline_whitespace_before_semicolons' => [
          'strategy' => 'no_multi_line',
      ],
      // Function defined by PHP should be called using the correct casing.
      'native_function_casing' => true,
      // There must be a comment when fall-through is intentional in a non-empty case body.
      'no_break_comment' => [
          'comment_text' => 'no break',
      ],
      // The closing "? >" tag MUST be omitted from files containing only PHP.
      'no_closing_tag' => true,
      // There should not be any empty comments.
      'no_empty_comment' => true,
      // There should not be empty PHPDoc blocks.
      'no_empty_phpdoc' => true,
      // Remove useless (semicolon) statements.
      'no_empty_statement' => true,
      // Removes extra blank lines and/or blank lines following configuration.
      'no_extra_blank_lines' => [
          'tokens' => [
              'attribute',
              'extra',
              'throw',
              'use',
              'use_trait',
              'break',
              'continue',
              'curly_brace_block',
              'parenthesis_brace_block',
              'return',
              'square_brace_block',
              'switch',
              'case',
              'default',
          ],
      ],
      // Remove leading slashes in use clauses.
      'no_leading_import_slash' => true,
      // The namespace declaration line shouldn't contain leading whitespace.
      'no_leading_namespace_whitespace' => true,
      // Either language construct print or echo should be used.
      'no_mixed_echo_print' => [
          'use' => 'echo',
      ],
      // Operator => should not be surrounded by multi-line whitespaces.
      'no_multiline_whitespace_around_double_arrow' => true,
      // There must not be more than one statement per line.
      'no_multiple_statements_per_line' => true,
      // Properties MUST not be explicitly initialized with null except when they have a type declaration (PHP 7.4).
      'no_null_property_initialization' => true,
      // Short cast bool using double exclamation mark should not be used.
      'no_short_bool_cast' => true,
      // Single-line whitespace before closing semicolon are prohibited.
      'no_singleline_whitespace_before_semicolons' => true,
      // There must be no space around double colons (also called Scope Resolution Operator or Paamayim Nekudotayim).
      'no_space_around_double_colon' => true,
      // When making a method or function call, there MUST NOT be a space between the method or function name and the opening parenthesis.
      'no_spaces_after_function_name' => true,
      // There MUST NOT be spaces around offset braces.
      'no_spaces_around_offset' => [
          'positions' => ['inside', 'outside'],
      ],
      // Parentheses must be declared using the configured whitespace. By default there are not any additional spaces inside parentheses, however with space=single configuration option whitespace inside parentheses will be unified to single space.
      'spaces_inside_parentheses' => true,
      // Removes @param, @return and @var tags that don't provide any useful information.
      'no_superfluous_phpdoc_tags' => true,
      'no_trailing_comma_in_singleline' => [
          'elements' => ['arguments', 'array_destructuring', 'array', 'group_import'],
      ],
      // Remove trailing whitespace at the end of non-blank lines.
      'no_trailing_whitespace' => true,
      // There MUST be no trailing spaces inside comment or PHPDoc.
      'no_trailing_whitespace_in_comment' => true,
      // Removes unneeded braces that are superfluous and aren't part of a control structure's body.
      'no_unneeded_braces' => true,
      // Removes unneeded parentheses around control statements.
      'no_unneeded_control_parentheses' => [
          'statements' => ['break', 'clone', 'continue', 'echo_print', 'return', 'switch_case', 'yield'],
      ],
      // Imports should not be aliased as the same name.
      'no_unneeded_import_alias' => true,
      // In function arguments there must not be arguments with default values before non-default ones.
      'no_unreachable_default_argument_value' => true,
      // Variables must be set null instead of using (unset) casting.
      'no_unset_cast' => true,
      // Unused use statements must be removed.
      'no_unused_imports' => true,
      // There should not be useless concat operations.
      'no_useless_concat_operator' => true,
      // There should not be useless else cases.
      'no_useless_else' => true,
      // There should not be useless Null-safe operator ?-> used.
      'no_useless_nullsafe_operator' => true,
      // There should not be an empty return statement at the end of a function.
      'no_useless_return' => true,
      // In array declaration, there MUST NOT be a whitespace before each comma. Whether the whitespace between heredoc end and comma should be removed.
      'no_whitespace_before_comma_in_array' => true,
      // Remove trailing whitespace at the end of blank lines.
      'no_whitespace_in_blank_line' => true,
      // Array index should always be written by using square braces.
      'normalize_index_brace' => true,
      // Logical NOT operators (!) should have leading and trailing whitespaces.
      'not_operator_with_space' => false,
      // Logical NOT operators (!) should have one trailing whitespace.
      'not_operator_with_successor_space' => false,
      // Nullable single type declaration should be standardised using configured syntax.
      'nullable_type_declaration' => [
          'syntax' => 'question_mark',
      ],
      // Adds or removes ? before single type declarations or |null at the end of union types when parameters have a default null value.
      'nullable_type_declaration_for_default_null_value' => true,
      // Adds separators to numeric literals of any kind. ejemplo: 1234567890 => 1_234_567_890
      'numeric_literal_separator' => true,
      // There should not be space before or after object operators -> and ?->.
      'object_operator_without_whitespace' => true,
      // Operators - when multiline - must always be at the beginning or at the end of the line.
      'operator_linebreak' => [
          'position' => 'beginning',
      ],
      // Orders the elements of classes/interfaces/traits/enums.
      'ordered_class_elements' => true,
      // Ordering use statements.
      'ordered_imports' => [
          'sort_algorithm' => 'alpha',
          'imports_order' => ['const', 'class', 'function'], // NEW https://mlocati.github.io/php-cs-fixer-configurator/#version:3.3%7Cfixer:ordered_imports
      ],
      'ordered_interfaces' => true,
      // Sort union types and intersection types using configured order.
      'ordered_types' => true,
      // Enforce camel (or snake) case for PHPUnit test methods, following configuration.
      'php_unit_method_casing' => ['case' => 'snake_case'],
      // PHPDoc should contain @param for all params.
      'phpdoc_add_missing_param_annotation' => true,
      // All items of the given PHPDoc tags must be either left-aligned or (by default) aligned vertically.
      'phpdoc_align' => true,
      // Docblocks should have the same indentation as the documented subject.
      'phpdoc_indent' => true,
      'phpdoc_inline_tag_normalizer' => true,
      // Changes doc blocks from single to multi line, or reversed. Works for class constants, properties and methods only.
      'phpdoc_line_span' => true,
      // @access annotations should be omitted from PHPDoc.
      'phpdoc_no_access' => true,
      // @package and @subpackage annotations should be omitted from PHPDoc.
      'phpdoc_no_package' => true,
      // Classy that does not inherit must not have @inheritdoc tags.
      'phpdoc_no_useless_inheritdoc' => true,
      // Order PHPDoc tags by value.
      'phpdoc_order_by_value' => true,
      // Orders all @param annotations in DocBlocks according to method signature.
      'phpdoc_param_order' => true,
      // Scalar types should always be written in the same form. int not integer, bool not boolean, float not real or double.
      'phpdoc_scalar' => true,
      // Annotations in PHPDoc should be grouped together so that annotations of the same type immediately follow each other. Annotations of a different type are separated by a single blank line.
      'phpdoc_separation' => true,
      // Single line @var PHPDoc should have proper spacing.
      'phpdoc_single_line_var_spacing' => true,
      // PHPDoc summary should end in either a full stop, exclamation mark, or question mark.
      'phpdoc_summary' => true,
      // Docblocks should only be used on structural elements.
      'phpdoc_to_comment' => true,
      // Takes @param annotations of non-mixed types and adjusts accordingly the function signature. Requires PHP >= 7.0.
      'phpdoc_to_param_type' => [
          'scalar_types' => true,
          'union_types' => true,
      ],
      'phpdoc_to_return_type' => [
          'scalar_types' => true,
          'union_types' => true,
      ],
      // PHPDoc should start and end with content, excluding the very first and last line of the docblocks.
      'phpdoc_trim' => true,
      // Removes extra blank lines after summary and after description in PHPDoc.
      'phpdoc_trim_consecutive_blank_line_separation' => true,
      'phpdoc_types' => true,
      // @var and @type annotations must have type and name in the correct order.
      'phpdoc_var_annotation_correct_order' => true,
      // @var and @type annotations of classy properties should not contain the name.
      'phpdoc_var_without_name' => true,
      // Converts protected variables and methods to private where possible.
      'protected_to_private' => true,
      // Classes must be in a path that matches their namespace, be at least one namespace deep and the class name should match the file name.
      'psr_autoloading' => true,
      // Local, dynamic and directly referenced variables should not be assigned and directly returned by a function or method.
      'return_assignment' => true,
      // If the function explicitly returns an array, and has the return type iterable, then yield from must be used instead of return.
      'return_to_yield_from' => false,
      // Adjust spacing around colon in return type declarations and backed enum types.
      'return_type_declaration' => ['space_before' => 'none'], // NEW https://www.php-fig.org/psr/psr-12/#45-method-and-function-arguments
      // Inside an enum or final/anonymous class, self should be preferred over static.
      'self_static_accessor' => true,
      // Instructions must be terminated with a semicolon.
      'semicolon_after_instruction' => true,
      // Cast (boolean) and (integer) should be written as (bool) and (int), (double) and (real) as (float), (binary) as (string).
      'short_scalar_cast' => true,
      // Converts explicit variables in double-quoted strings and heredoc syntax from simple to complex format (${ to {$).
      'simple_to_complex_string_variable' => true,
      // Simplify if control structures that return the boolean result of their condition. ejemplo: if ($foo) { return true; } return false; to -> return (bool) ($foo);
      'simplified_if_return' => true,
      // A return statement wishing to return void should not return null.
      'simplified_null_return' => false, // disabled by Shift
      // A PHP file without end tag must always end with a single empty line feed.
      'single_blank_line_at_eof' => true,
      // Native type declarations should be used in the correct case. ejemplo: public function Foo(CALLABLE $bar): INT {} a public function Foo(callable $bar): int {}
      'native_type_declaration_casing' => true,
      // All instances created with new keyword must (not) be followed by parentheses.
      'new_with_parentheses' => true,
      // Master functions shall be used instead of aliases. ejemplo: cambiara de chop() a rtrim()
      'no_alias_functions' => true,
      // Master language constructs shall be used instead of aliases.
      'no_alias_language_construct_call' => true,
      // Replace control structure alternative syntax to use braces.
      'no_alternative_syntax' => true,
      // There should not be a binary flag before strings. ejemplo (no permitido): <?php $a = b'foo';
      'no_binary_string' => true,
      // There should be no empty lines after class opening brace.
      'no_blank_lines_after_class_opening' => true,
      // There should not be blank lines between docblock and the documented element.
      'no_blank_lines_after_phpdoc' => true,
      // las funciones no se puedan declarar en una sola linea ejemplo (no permitido): private static $bar1 = array(1,2,3), $bar2 = [1,2,3];
      // correctamente:
      // private static $bar1 = array(1,2,3);
      // private static $bar2 = [1,2,3];
      'single_class_element_per_statement' => [
          'elements' => ['property'],
      ],
      // There MUST be one use keyword per declaration.
      'single_import_per_statement' => [
          'group_to_single_imports' => true,
      ],
      // Each namespace use MUST go on its own line and there MUST be one blank line after the use statements block.
      'single_line_after_imports' => true,
      // Single-line comments must have proper spacing.
      'single_line_comment_spacing' => true,
      // Single-line comments and multi-line comments with only one line of actual content should use the `//` syntax.
      'single_line_comment_style' => [
          'comment_types' => ['hash'],
      ],
      // Empty body of class, interface, trait, enum or function must be abbreviated as {} and placed on the same line as the previous symbol, separated by a single space.
      'single_line_empty_body' => true,
      // Throwing exception must be done in single line.
      'single_line_throw' => true,
      // Convert double quotes to single quotes for simple strings.
      'single_quote' => true,
      // Fix whitespace after a semicolon.
      'space_after_semicolon' => true,
      // Replace all <> with !=.
      'standardize_not_equals' => true,
      // Each statement must be indented.
      'statement_indentation' => [
          'stick_comment_to_next_continuous_control_statement' => false,
      ],
      // Las comparaciones seran con el triple igual
      'strict_comparison' => true,
      // A case should be followed by a colon and not a semicolon.
      'switch_case_semicolon_to_colon' => true,
      // Removes extra spaces between colon and case value.
      'switch_case_space' => true,
      // Switch case must not be ended with continue but with break.
      'switch_continue_to_break' => true,
      // Standardize spaces around ternary operator.
      'ternary_operator_spaces' => true,
      // Use null coalescing operator ?? where possible. Requires PHP >= 7.0.
      'ternary_to_null_coalescing' => true,
      // Multi-line arrays, arguments list, parameters list and match expressions must have a trailing comma.
      'trailing_comma_in_multiline' => ['elements' => ['arrays']],
      // Los arrays deben formatearse como los argumentos de función/método, sin espacios intermedios ni finales.
      'trim_array_spaces' => true,
      // Alrededor de los operadores de tipo unión e intersección debe haber un espacio.
      'types_spaces' => ['space' => 'single'],
      // TypesSpacesFixer::class,
      // Los operadores unarios deben colocarse adyacentes a sus variable.
      'unary_operator_spaces' => true,
      // Visibility MUST be declared on all properties and methods; abstract and final MUST be declared before the visibility; static MUST be declared after the visibility.
      'visibility_required' => [
          'elements' => ['property', 'method', 'const'],
      ],
      // Te añade el void a los métodos que no devuelven nada
      'void_return' => true,
      'whitespace_after_comma_in_array' => true,
    ];

    $finder = Finder::create()
        ->in([
            __DIR__.'/app',
            __DIR__.'/config',
            __DIR__.'/database',
            __DIR__.'/resources',
            __DIR__.'/routes',
            __DIR__.'/tests',
        ])
        ->name('*.php')
        ->notName('*.blade.php')
        ->ignoreDotFiles(true)
        ->ignoreVCS(true);

    return (new Config())
        ->setFinder($finder)
        ->setRules($rules)
        ->setRiskyAllowed(true)
        ->setUsingCache(true);
  }
}