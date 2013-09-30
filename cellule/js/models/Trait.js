define( function ( require ) {
	'use strict';

	var bean  = require( 'bean' );
	var Paper = require( 'paper' );

	var Trait = function ( name, value, options ) {
		this.options = options || {};

		var seedMin = 1   || this.options.min;
		var seedMax = 100 || this.options.max;

		Object.defineProperty( this, 'name', {
			'configurable' : false,

			'get' : function() {
				return name;
			},

			'set' : function( name ) {
				name = name;
			}
		} );

		Object.defineProperty( this, 'value', {
			'configurable' : false,

			'get' : function() {
				return value;
			},

			'set' : function( value ) {
				value = value;
			}
		} );

		this.name  = name;
		this.value = value || Math.random() * ( seedMax - seedMin ) + seedMin;

		return this;
	};

	// Return a new and averaged trait
	Trait.prototype.merge = function ( trait ) {
		if ( this.name !== trait.name ) {
			throw new Error( 'Cannot merge different types of traits' );
		} else {
			var average = ( this.value + trait.value ) / 2;

			return new Trait( this.name );
		}
	};

	// Return a new and mutated trait
	Trait.prototype.mutate = function ( options ) {
		var mutatedValue = this.value = Math.random() * 10 * ( Math.random() < 0.5 ? -1 : 1 );

		return new Trait( this.name, mutatedValue, this.options );
	};

	return Trait;
} );